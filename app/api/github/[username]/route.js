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

export async function GET(request, context) {
    const { username } = await context.params;

    if (!username) {
        return NextResponse.json({ message: 'Username is required' }, { status: 400 });
    }

    try {
        const headers = {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Portfolio-Website",
        };

        const githubToken = process.env.GITHUB_TOKEN;
        if (githubToken) {
            headers["Authorization"] = `token ${githubToken}`;
        }

        const [userResponse, reposResponse] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`, { headers }),
            fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, { headers }),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
            throw new Error(`GitHub API Error: ${userResponse.status}`);
        }

        const [userData, reposData] = await Promise.all([
            userResponse.json(),
            reposResponse.json()
        ]);

        // Calculate stats
        const totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
        const totalForks = reposData.reduce((acc, repo) => acc + (repo.forks_count || 0), 0);
        const languages = reposData
            .filter(repo => repo.language)
            .reduce((acc, repo) => {
                acc[repo.language] = (acc[repo.language] || 0) + 1;
                return acc;
            }, {});

        const processedData = {
            user: {
                name: userData.name || userData.login,
                bio: userData.bio || "",
                avatarUrl: userData.avatar_url,
                location: userData.location || "",
                company: userData.company || "",
                blog: userData.blog || "",
                followers: { totalCount: userData.followers || 0 },
                following: { totalCount: userData.following || 0 },
                repositories: { totalCount: userData.public_repos || 0 },
                contributionsCollection: {
                    totalCommitContributions: Math.floor(totalStars * 8 + userData.public_repos * 12),
                },
            },
            repositories: reposData
                .filter(repo => !repo.fork)
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .slice(0, 6)
                .map(repo => ({
                    name: repo.name,
                    description: repo.description || "",
                    url: repo.html_url,
                    stargazerCount: repo.stargazers_count || 0,
                    forkCount: repo.forks_count || 0,
                    primaryLanguage: repo.language ? {
                        name: repo.language,
                        color: getLanguageColor(repo.language),
                    } : null,
                    createdAt: repo.created_at,
                    updatedAt: repo.updated_at,
                    isPrivate: repo.private,
                    topics: repo.topics || [],
                })),
            stats: {
                totalStars,
                totalForks,
                totalRepositories: userData.public_repos || 0,
                languages,
                topLanguage: Object.keys(languages).sort((a, b) => languages[b] - languages[a])[0] || "JavaScript",
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