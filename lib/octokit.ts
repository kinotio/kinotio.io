import { Octokit } from 'octokit'

const octokit = new Octokit({ auth: process.env.GH_TOKEN })

async function getOrgContributors() {
  return await octokit.request('GET /orgs/kinotio/members', {
    org: 'ORG',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
}

async function getOrgRepos() {
  return await octokit.request('GET /orgs/kinotio/repos', {
    org: 'ORG',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
    type: 'public',
  })
}

export { getOrgContributors, getOrgRepos }
