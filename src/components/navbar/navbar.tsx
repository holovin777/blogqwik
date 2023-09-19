import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type NavbarProps from '~/interfaces/NavbarProps';
import { Image } from "@unpic/qwik";

export default component$<NavbarProps>((props) => {

    const menuVisibleSignal = useSignal(false);

    return (

        <nav class="items-center bg-gray-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {
                            props.avatar_url === undefined
                                ?
                                (
                                    <Link href="/">
                                        <div class="flex flex-shrink-0 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>
                                        </div>
                                    </Link>
                                )
                                :
                                (
                                    <Link href="/">
                                        <div class="flex flex-shrink-0 items-center">
                                            <Image class="px-1" src={props.avatar_url} width={40} height={40} alt="Your Company" /> {props.login}
                                        </div>
                                    </Link>
                                )
                        }
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <Link href="/" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                                <Link href="/repositories" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Repositories</Link>
                                <Link href="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class="relative ml-3">
                            <div>
                                <div class="inset-y-0 left-0 flex items-center sm:hidden">
                                    <button
                                        onClick$={() => menuVisibleSignal.value = !menuVisibleSignal.value}
                                        type="button"
                                        class="relative
                                            inline-flex
                                            items-center
                                            justify-center
                                            rounded-md
                                            p-2
                                            text-gray-400
                                            hover:bg-gray-700
                                            hover:text-white
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-inset
                                            focus:ring-white
                                        "
                                        aria-controls="mobile-menu"
                                        aria-expanded="false"
                                    >
                                        <span class="absolute -inset-0.5"></span>
                                        <span class="sr-only">Open main menu</span>
                                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >

            {menuVisibleSignal.value &&
                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">
                        <Link
                            href="/"
                            class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                            aria-current="page"
                        >
                            Home
                        </Link>
                        <Link
                            href="/repositories"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            Repositories
                        </Link>
                        <Link
                            href="/about"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            About
                        </Link>
                    </div>
                </div>
            }
        </nav >

    );
});