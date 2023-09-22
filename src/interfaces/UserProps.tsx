export default interface UserProps {
    login: string;
    avatar_url?: string;
    html_url: string;
    followers_url?: string;
    following_url?: string;
    repos_url?: string;
    name: string;
    blog?: string;
    location: string;
    email?: string;
    bio?: string;
    twitter_username?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    created_at?: string;
    updated_at?: string;
}