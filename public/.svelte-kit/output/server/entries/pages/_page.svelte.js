import { c as create_ssr_component, e as escape, d as null_to_empty, b as subscribe, f as each, h as add_attribute, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
const tasks = writable([]);
const fetchTasks = async () => {
  const data = await fetch("http://localhost:5000/read");
  const res = await data.json();
  tasks.set(res);
};
fetchTasks();
const TodoItem_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".item.svelte-3cr912{display:flex;justify-content:space-between}p.svelte-3cr912{font-size:clamp(1.5rem, 2vw, 2rem);padding-bottom:1em;color:#ff4040;max-width:79%}.done.svelte-3cr912{color:#0c7c01;text-decoration:line-through;text-decoration-thickness:10px}button.svelte-3cr912{background-color:#f1f0f0;border:2px solid #000000;width:2em;aspect-ratio:1;font-size:clamp(1rem, 2vw, 1.5rem);cursor:pointer}",
  map: null
};
const TodoItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { task } = $$props;
  let completed = task["completed"];
  if ($$props.task === void 0 && $$bindings.task && task !== void 0)
    $$bindings.task(task);
  $$result.css.add(css$2);
  return `<div class="${"item svelte-3cr912"}"><p class="${escape(null_to_empty(`${completed ? "done" : "undefined"}`), true) + " svelte-3cr912"}">${escape(task["task"])}</p>
	<div class="${"toggle"}">${!completed ? `<button class="${"svelte-3cr912"}">❌</button>` : `<button class="${"svelte-3cr912"}">✅</button>`}
		<button class="${"svelte-3cr912"}">🗑️</button></div>
</div>`;
});
const Todos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.svelte-1qvtinb{margin-bottom:1em;font-size:3rem;color:#0084ff;text-shadow:0.1em 0.1em #ffc400}.todo.svelte-1qvtinb{background:linear-gradient(#ffffff, #f0f0f0);border-radius:10px;width:clamp(calc(10em + 15vw), 50vw, 30em);padding:2em;box-shadow:1em 1em #8f8f8f;margin-bottom:3em}input.svelte-1qvtinb{border:2px solid #e9e9e9;width:calc(60% + 5vw);height:1em;font-size:1.5rem;padding:1em;border-radius:10px;margin-top:1em;display:block}button.svelte-1qvtinb{width:5em;padding:0.5em;border-radius:5px;background-color:#0084ff;color:#ffffff;border:none;font-size:1rem;margin-top:1em;box-shadow:0.3em 0.3em #8f8f8f;transition:all 0.3s}button.svelte-1qvtinb:hover{transform:translateX(0.3em) translateY(0.3em);box-shadow:none}",
  map: null
};
const Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tasks, $$unsubscribe_tasks;
  $$unsubscribe_tasks = subscribe(tasks, (value2) => $tasks = value2);
  let value = "";
  tasks.subscribe((data) => {
  });
  $$result.css.add(css$1);
  $$unsubscribe_tasks();
  return `<div class="${"todo svelte-1qvtinb"}"><h1 class="${"svelte-1qvtinb"}">Tasks</h1>
	${each($tasks, (task) => {
    return `${validate_component(TodoItem, "TodoItem").$$render($$result, { task }, {}, {})}`;
  })}
	<input type="${"text"}" class="${"svelte-1qvtinb"}"${add_attribute("value", value, 0)}>
	${`<button class="${"svelte-1qvtinb"}">Add task</button>`}
</div>`;
});
const App_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');*{margin:0;padding:0;font-family:'Rowdies', cursive}body.svelte-1h48sbx{min-height:100vh;background-color:#ffc400;display:flex;flex-direction:column;align-items:center;position:relative}h1.svelte-1h48sbx{font-weight:100;font-size:clamp(4rem, 3vw, 6rem);text-align:center}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="${"svelte-1h48sbx"}"><h1 class="${"svelte-1h48sbx"}">TODO List</h1>
	${validate_component(Todos, "Todos").$$render($$result, {}, {}, {})}
</body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
