import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import Navbar from "~/components/navbar/navbar";
import type RepoProps from "~/interfaces/RepoProps";

export const useRepos = routeLoader$(async () => {
  const response = await fetch(`https://${import.meta.env.PUBLIC_GITHUB_URL}/users/${import.meta.env.PUBLIC_GITHUB_LOGIN}/repos`, {
    headers: {
      Accept: 'application/json',
      Authorization: import.meta.env.GITHUB_TOKEN,
    },
  });
  return (await response.json()) as RepoProps[];
});

export default component$(() => {
  const reposSignal = useRepos();
  return (
    <div class="">
      <Navbar />
      <Header title="Repositories" />
      <div class="text-3xl p-4">
        {
          reposSignal.value.map(repo => (
            <div key={repo.id} >
              <Link href={`/repositories/${repo.name}`}>{repo.name}</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};