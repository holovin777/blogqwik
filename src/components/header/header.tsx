import { component$ } from '@builder.io/qwik';
import type HeaderProps from '~/interfaces/HeaderProps';

export default component$<HeaderProps>((props) => {

    return (

        <h1 class="header">{props.title}</h1>

    );
});
