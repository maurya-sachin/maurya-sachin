// app/api/github/[username]/route.js
import { NextResponse } from 'next/server';

const getLanguageColor = (language) => {
    const colors = {
        JavaScript: "#f1e05a", TypeScript: "#2b7489", Python: "#3572A5",
        HTML: "#e34c26", CSS: "#563d7c", React: "#61dafb", Vue: "#4FC08D",
        Java: "#b07219", "C++": "#f34b7d", Go: "#00ADD8", PHP: "#4F5D95",
        Swift: "#fa7343", Kotlin: "#F18E33", Rust: "#dea584", Dart: "#00B4AB",
    };
    return colors[language] || "#586e75";
};

// GraphQL query to get contribution data
const getContributionsQuery = (username, from, to) => `
query {
    user(login: "${username}") {
        name
        bio
        avatarUrl
        location
        company
        websiteUrl
        followers {
            totalCount
        }
        following {
            totalCount
        }
        repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) {
            totalCount
            nodes {
                name
                description
                url
                stargazerCount
                forkCount
                primaryLanguage {
                    name
                    color
                }
                createdAt
                updatedAt
                isPrivate
                repositoryTopics(first: 10) {
                    nodes {
                        topic {
                            name
                        }
                    }
                }
            }
        }
        contributionsCollection(from: "${from}", to: "${to}") {
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            totalRepositoryContributions
            contributionCalendar {
                totalContributions
                weeks {
                    contributionDays {
                        contributionCount
                        date
                        weekday
                    }
                }
            }
            commitContributionsByRepository(maxRepositories: 100) {
                repository {
                    name
                    owner {
                        login
                    }
                }
                contributions(first: 100) {
                    totalCount
                }
            }
        }
    }
}`;

// Function to fetch data from GitHub GraphQL API
async function fetchGitHubGraphQL(query) {
    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
        throw new Error('GitHub token is required for GraphQL API');
    }

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${githubToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error(`GitHub GraphQL API Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
        throw new Error(`GraphQL Error: ${data.errors.map(e => e.message).join(', ')}`);
    }

    return data.data;
}

export async function GET(request, context) {
    const { username } = await context.params;

    if (!username) {
        return NextResponse.json({ message: 'Username is required' }, { status: 400 });
    }

    try {
        // Get contribution data for the last year
        const to = new Date().toISOString();
        const from = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString();

        const query = getContributionsQuery(username, from, to);
        const gitHubData = await fetchGitHubGraphQL(query);

        if (!gitHubData.user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const userData = gitHubData.user;
        const contributions = userData.contributionsCollection;

        // Process repositories
        const repositories = userData.repositories.nodes
            .filter(repo => !repo.isPrivate)
            .slice(0, 6)
            .map(repo => ({
                name: repo.name,
                description: repo.description || "",
                url: repo.url,
                stargazerCount: repo.stargazerCount,
                forkCount: repo.forkCount,
                primaryLanguage: repo.primaryLanguage,
                createdAt: repo.createdAt,
                updatedAt: repo.updatedAt,
                isPrivate: repo.isPrivate,
                topics: repo.repositoryTopics.nodes.map(t => t.topic.name),
            }));

        // Calculate language statistics
        const languages = repositories
            .filter(repo => repo.primaryLanguage)
            .reduce((acc, repo) => {
                const lang = repo.primaryLanguage.name;
                acc[lang] = (acc[lang] || 0) + 1;
                return acc;
            }, {});

        // Process contribution calendar for streak calculation
        const contributionDays = contributions.contributionCalendar.weeks
            .flatMap(week => week.contributionDays)
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        // Calculate current streak
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = contributionDays.length - 1; i >= 0; i--) {
            const day = contributionDays[i];
            const dayDate = new Date(day.date);

            if (day.contributionCount > 0) {
                tempStreak++;
                longestStreak = Math.max(longestStreak, tempStreak);

                // Calculate current streak (from today backwards)
                const daysDiff = Math.floor((today - dayDate) / (1000 * 60 * 60 * 24));
                if (daysDiff <= currentStreak) {
                    currentStreak = tempStreak;
                }
            } else {
                tempStreak = 0;
            }
        }

        const processedData = {
            user: {
                name: userData.name || username,
                bio: userData.bio || "",
                avatarUrl: userData.avatarUrl,
                location: userData.location || "",
                company: userData.company || "",
                blog: userData.websiteUrl || "",
                followers: userData.followers,
                following: userData.following,
                repositories: { totalCount: userData.repositories.totalCount },
                contributionsCollection: {
                    totalCommitContributions: contributions.totalCommitContributions,
                    totalIssueContributions: contributions.totalIssueContributions,
                    totalPullRequestContributions: contributions.totalPullRequestContributions,
                    totalPullRequestReviewContributions: contributions.totalPullRequestReviewContributions,
                    totalRepositoryContributions: contributions.totalRepositoryContributions,
                    totalContributions: contributions.contributionCalendar.totalContributions,
                    currentStreak,
                    longestStreak,
                },
            },
            repositories,
            stats: {
                totalStars: repositories.reduce((acc, repo) => acc + repo.stargazerCount, 0),
                totalForks: repositories.reduce((acc, repo) => acc + repo.forkCount, 0),
                totalRepositories: userData.repositories.totalCount,
                languages,
                topLanguage: Object.keys(languages).sort((a, b) => languages[b] - languages[a])[0] || "JavaScript",
                contributions: {
                    total: contributions.contributionCalendar.totalContributions,
                    commits: contributions.totalCommitContributions,
                    issues: contributions.totalIssueContributions,
                    pullRequests: contributions.totalPullRequestContributions,
                    reviews: contributions.totalPullRequestReviewContributions,
                    repositories: contributions.totalRepositoryContributions,
                    currentStreak,
                    longestStreak,
                },
                contributionCalendar: contributions.contributionCalendar,
            },
        };

        return NextResponse.json(processedData, {
            status: 200,
            headers: {
                'Cache-Control': 's-maxage=3600, stale-while-revalidate=60',
            },
        });
    } catch (error) {
        console.error('GitHub API Error:', error.message);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}