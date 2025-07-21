//lib/githubGraphql.js

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

async function fetchGitHubGraphQL(query, variables = {}) {
  const res = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  return json.data;
}

module.exports = { fetchGitHubGraphQL };
