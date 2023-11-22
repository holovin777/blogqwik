import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Card from "~/components/card/card";
import Header from "~/components/header/header";
import type UserProps from "~/interfaces/UserProps";

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
  return (
    <div>
      <Header title="About" />
      <Card
        login={userSignal.value.login}
        name={userSignal.value.name}
        html_url={userSignal.value.html_url}
        followers={userSignal.value.followers}
        blog={userSignal.value.blog}
        location={userSignal.value.location}
        email={userSignal.value.email}
        twitter_username={userSignal.value.twitter_username}
        created_at={userSignal.value.created_at}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "About page",
  meta: [
    {
      name: "description",
      content: "Site description",
    },
  ],
};
