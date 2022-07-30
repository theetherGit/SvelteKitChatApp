import { c as create_ssr_component, e as escape, a as each, b as add_attribute } from "../../_app/immutable/chunks/index-9a1255b9.js";
import ioClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
ioClient(ENDPOINT);
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textfield = "";
  let username = "";
  let messages = [];
  return `<div class="${"h-screen w-screen bg-zinc-800"}"><div class="${"h-full w-full max-w-md mx-auto bg-zinc-500 flex flex-col"}"><header class="${"px-6 py-4 border-b border-zinc-800 bg-zinc-700 text-white shrink-0 flex items-center justify-between"}"><span class="${"font-bold text-xl"}">My Chat app</span>
			<span>${escape(username)}</span></header>

		<div class="${"h-full w-full p-4"}">${each(messages, (message) => {
    return `<div class="${"bg-zinc-300 rounded-xl rounded-tl-none px-4 py-3 my-4 w-fit"}"><span class="${"flex items-center space-between gap-4"}"><b>${escape(message.from)}</b>
						<i>${escape(message.time)}</i></span>
					${escape(message.message)}
				</div>`;
  })}</div>

		<form action="${"#"}" class="${"px-6 py-4 border-t border-zinc-800 bg-zinc-700 text-white shrink-0 flex items-center"}"><input type="${"text"}" placeholder="${"Type something..."}" class="${"bg-transparent border-none px-4 py-3 w-full"}"${add_attribute("value", textfield, 0)}>
			<button type="${"submit"}" class="${"shrink-0 border border-white rounded-lg px-4 py-3"}">Send</button></form></div></div>`;
});
export {
  Routes as default
};
