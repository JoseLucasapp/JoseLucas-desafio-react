export interface GithubLicenseInterface {
    key: string;
    name: string;
    node_id: string;
    spdx_id: string;
}

export interface RepositoryItens {
    language: string;
    name: string;
    description: string;
    topics: string[];
    license: GithubLicenseInterface;
    updated_at: string;
    forks: number;
    stargazers_count: number;
    url: string;
}