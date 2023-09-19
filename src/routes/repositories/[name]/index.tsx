import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useRepoDescription = routeLoader$(async (requestEvent) => {
    const res = await fetch(`https://raw.githubusercontent.com/${import.meta.env.PUBLIC_GITHUB_LOGIN}/${requestEvent.params.name}/master/README.md`);
    const repoDescription = await res.text();
    return repoDescription;
});

export default component$(() => {
    const signalRepoDescription = useRepoDescription();
    return (
        <div>
            {signalRepoDescription.value}
        </div>
    );
});