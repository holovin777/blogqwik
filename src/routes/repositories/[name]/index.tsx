import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { marked } from 'marked';

export const useRepoDescription = routeLoader$(async (requestEvent) => {
    const res = await fetch(
        `https://raw.githubusercontent.com/${import.meta.env.PUBLIC_GITHUB_LOGIN}/${requestEvent.params.name}/master/README.md`, {
        headers: {
            Accept: 'application/json',
            Authorization: import.meta.env.GITHUB_TOKEN,
        }
    }
    );
    const repoDescription = await res.text();
    const html = marked.parse(repoDescription);
    return html as string;
});

export default component$(() => {
    const signalRepoDescription = useRepoDescription();
    return (
        <div>
            <div class="md" dangerouslySetInnerHTML={`${signalRepoDescription.value}`}></div>
        </div>
    );
});