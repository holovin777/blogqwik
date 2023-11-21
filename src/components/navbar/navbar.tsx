import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type NavbarProps from "~/interfaces/NavbarProps";
import { Image } from "@unpic/qwik";

export default component$<NavbarProps>((props) => {
  const userSignal = props.userSignal;
  const menuVisibleSignal = useSignal(false);

  return (
    <nav>
      <ul class="ul">
        {userSignal.value.login ? (
          <li class="li" style="display: inline">
            <Link class="a" href="/">
              <Image
                src={userSignal.value.avatar_url}
                width={20}
                height={20}
                alt="Your Company"
              />
              {userSignal.value.login}
            </Link>
          </li>
        ) : (
          <li class="li" style="display: inline">
            <Link class="a" href="/">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Thurgauer Kantonalbank</title>
                <path d="M21.872 2.262H10.775l-6.14 9.743 6.14 9.771h11.097l-6.135-9.77 6.135-9.744zM0 .297v23.406h24V.297H0zm23.057 22.486L.943 22.778V1.228h22.109l.005 21.555z" />
              </svg>
            </Link>
          </li>
        )}
        <li class="li" style="display:inline;">
          <Link
            class="a"
            style="text-align: right;"
            onClick$={() =>
              (menuVisibleSignal.value = !menuVisibleSignal.value)
            }
          >
            Menu
          </Link>
        </li>
      </ul>
      {menuVisibleSignal.value && (
        <ul class="ul">
          <li
            class="li"
            onClick$={() =>
              (menuVisibleSignal.value = !menuVisibleSignal.value)
            }
          >
            <Link class="a" href="/">Home</Link>
          </li>
          <li
            class="li"
            onClick$={() =>
              (menuVisibleSignal.value = !menuVisibleSignal.value)
            }
          >
            <Link class="a" href="/repositories">Repositories</Link>
          </li>
          <li
            class="li"
            onClick$={() =>
              (menuVisibleSignal.value = !menuVisibleSignal.value)
            }
          >
            <Link class="a" href="/about">About</Link>
          </li>
        </ul>
      )}
    </nav>
  );
});
