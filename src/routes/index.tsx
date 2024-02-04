import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import type UserProps from "~/interfaces/UserProps";
import { marked } from "marked";

export const useRepoDescription = routeLoader$(async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/${import.meta.env.PUBLIC_GITHUB_LOGIN}/bio/master/README.md`,
    {
      headers: {
        Accept: "application/json",
        Authorization: import.meta.env.GITHUB_TOKEN,
      },
    }
  );
  const repoDescription = await res.text();
  const html = marked.parse(repoDescription);
  return html as string;
});

export const useUser = routeLoader$(async () => {
  const res = await fetch(
    `https://${import.meta.env.PUBLIC_GITHUB_URL}/users/${
      import.meta.env.PUBLIC_GITHUB_LOGIN
    }`,
    {
      headers: {
        Accept: "application/json",
        Authorization: import.meta.env.GITHUB_TOKEN,
      },
    }
  );
  return (await res.json()) as UserProps;
});

export default component$(() => {
  const userSignal = useUser();
  const signalRepoDescription = useRepoDescription();
  return (
    <div>
      {userSignal.value.bio && <Header title={userSignal.value.bio} />}
      <div
        class="md"
        dangerouslySetInnerHTML={`${signalRepoDescription.value}`}
      ></div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my blog",
  meta: [
    {
      name: "description",
      content: "Blog description",
    },
  ],
};
