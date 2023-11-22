import { component$ } from "@builder.io/qwik";
import type UserProps from "~/interfaces/UserProps";

export default component$<UserProps>((props) => {
  return (
    <div style="margin: 12px;">
      <h2>{props.name}</h2>
      <h5>
        GitHub <a href={props.html_url}>{props.login}</a>
      </h5>
      <div>{props.location}</div>
      <div>{props.email}</div>
      <div>Created at {props.created_at}</div>
    </div>
  );
});
