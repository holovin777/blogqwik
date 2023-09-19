import { component$ } from '@builder.io/qwik';
import type HeaderProps from '~/interfaces/HeaderProps';

export default component$<HeaderProps>((props) => {

    return (

        <div class="text-4xl text-center p-4">{props.title}</div>

    );
});
