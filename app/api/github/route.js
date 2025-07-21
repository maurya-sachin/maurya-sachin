//app/api/github/route.js

import { NextResponse } from "next/server";
import { fetchGitHubGraphQL } from "../../../lib/githubGraphql";

const query = `
  query GetUserData($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      bio
      location
      followers {
        totalCount
      }
      following {
        totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      repositories(first: 6, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          name
          description
          stargazerCount
          forkCount
          url
          updatedAt
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const data = await fetchGitHubGraphQL(query, { login: "maurya-sachin" });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
