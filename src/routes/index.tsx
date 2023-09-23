import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import type UserProps from "~/interfaces/UserProps";

export const useUser = routeLoader$(async () => {
  const res = await fetch(`https://${import.meta.env.PUBLIC_GITHUB_URL}/users/${import.meta.env.PUBLIC_GITHUB_LOGIN}`, {
    headers: {
      Accept: 'application/json',
      Authorization: import.meta.env.GITHUB_TOKEN,
    },
  });
  return (await res.json()) as UserProps;
});

export default component$(() => {
  const userSignal = useUser();
  return (
    <div>
      {userSignal.value.bio &&
        <Header title={userSignal.value.bio} />
      }
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