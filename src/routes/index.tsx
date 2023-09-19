import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Navbar from "~/components/navbar/navbar";
import type UserProps from "~/interfaces/UserProps";

export const useUser = routeLoader$(async () => {
  const response = await fetch(`https://${import.meta.env.PUBLIC_GITHUB_URL}/users/${import.meta.env.PUBLIC_GITHUB_LOGIN}`, {
    headers: {
      Accept: 'application/json',
      Authorization: import.meta.env.GITHUB_TOKEN,
    },
  });
  return (await response.json()) as UserProps;
});

export default component$(() => {
  const userSignal = useUser();
  return (
    <div class="">
      <Navbar
        login={userSignal.value.login}
        avatar_url={userSignal.value.avatar_url}
      />
      <div class="text-3xl font-bold p-4">
        {userSignal.value.bio}
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