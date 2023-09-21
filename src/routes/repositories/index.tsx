import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import Navbar from "~/components/navbar/navbar";
import type RepoProps from "~/interfaces/RepoProps";

export const useRepos = routeLoader$(async () => {
  const res = await fetch(`https://${import.meta.env.PUBLIC_GITHUB_URL}/users/${import.meta.env.PUBLIC_GITHUB_LOGIN}/repos`, {
    headers: {
      Accept: 'application/json',
      Authorization: import.meta.env.GITHUB_TOKEN,
    },
  });
  return (await res.json()) as RepoProps[];
});

export default component$(() => {
  const reposSignal = useRepos();
  return (
    <div class="">

      <Navbar />
      <Header title="Repositories" />
      <ul>
        {
          reposSignal.value.map(repo => (
            <li key={repo.id} >
              <Link href={`/repositories/${repo.name}`}>{repo.name}</Link>
            </li>
          ))
        }
      </ul>
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