<!-- Svelte - JavaScript framework - by Beumsk -->



<!-- install vs code extension svelte -->

<!-- create sveltekit app -->
<!-- npm create svelte@latest myapp -->

<!-- add sass -->
<!-- npm i -D svelte-preprocess sass -->
<!-- svelte.config.js -->
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  preprocess: [vitePreprocess(), sveltePreprocess({ scss: {} })],
};
<!-- any .svelte file -->
<style lang="scss"></style>



<!-- BASICS -->
<script>
  let title = 'Svelte';
  let src = 'https://picsum.photos/200';
  let name = 'Einstein';
</script>
<h1>Hello {title}!</h1>
<img {src} alt="{name} dances" />
<style>
  h1 { color: red; }
  img { display: block; }
</style>


<!-- REACTIVITY -->
<script>
  let count = 0;
  function incrementCount() {
    count += 1;
  }
  $: doubled = count * 2;
  $: if(count >= 5) {alert('!!!')}
  let numbers = [1, 2, 3, 4];
  function addNumbers() {
    numbers.push(numbers.length + 1);
    numbers = numbers;
  }
  $: sum = numbers.reduce((t,n ) => t +n, 0);
</script>
<button on:click={incrementCount}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
<p>{numbers.join('+')} = {sum}</p>


<!-- NESTING -->
<!-- App.svelte -->
<script>
  import Child from './Child.svelte';
  const propsForChild = {
    answer: 42,
    other: 'yes'
  }
  let propToBind = 3;
</script>
<Child answer={42} />
<Child />
<Child {...propsForChild} />
<Child bind:propToBind /> <!-- if changed in child, will reflect in parent because bind -->
<!-- Child.svelte -->
<script>
  export let answer = 'a mistery'; /* default props value is not mandatory */
  export let other = 'no';
  export let propToBind;
  console.log($$props); /* props passed to component */
  console.log($$restProps); /* props not defined in component; very useful to allow all properties */
</script>
<div {...$$restProps}>
  <p>Child paragraph from Child with props answer: {answer}</p>
  <p>Is this paragraph useless? {other}</p>
</div>


<!-- SLOTS -->
<!-- App.svelte -->
<script>
  import Child from './Child.svelte';
</script>
<Child on:click={() => alert('e')} let:x={x}><!-- get slot props with let: -->
  <span slot="left">Left thing</span><!-- custom slot named 'left' -->
  Anything
</Child>
<Child on:click={() => alert('e')}><!-- forward event needs Child to have an empty event -->
  Anything
</Child>
<!-- Child.svelte -->
<script>
  console.log($$slots); /* slots in component */
</script>
<div on:click class:has-left={$$slots.left}>
  {#if $$slots.left}
    <slot name="left"></slot>
  {/if}
  <slot x="y">Fallback<slot/>
</div>


<!-- CLASS -->
<!-- App.svelte -->
<script>
  import Child from './Child.svelte';
</script>
<Child size="sm" shadow />
<!-- Child.svelte -->
<script>
  export let size = 'lg';
  export let shadow = false;
</script>
<div class={`size-${size}`} class:shadow>Text</div>


<!-- STYLE -->
<!-- App.svelte -->
<script>
  import Child from './Child.svelte';
</script>
<Child color="red" />
<!-- Child.svelte -->
<script>
  export let color = undefined;
</script>
<div style="background-color: {color};" style:color>Text</div>
<style>
  /* unscoped css */
  :global(body) {
    background: #fefefe;
  }
  /* scoped css */
  div {
    color: #333;
  }
</style>


<!-- CONDITIONALS -->
<script>
  let x = 7;
</script>
{#if x > 10}
  <p>{x} is greater than 10</p>
{:else if 5 > x}
  <p>{x} is less than 5</p>
{:else}
  <p>{x} is between 5 and 10</p>
{/if}


<!-- LOOPS -->
<script>
  let cats = [
    { id: 1, name: 'Keyboard Cat' },
    { id: 2, name: 'Maru' },
    { id: 3, name: 'Henri The Existential Cat' }
  ];
</script>
<!-- basic with index -->
<ul>
  {#each cats as cat, i}
    <li>{i + 1}: {cat.name}</li>
  {/each}
</ul>
<!-- basic with const -->
<ul>
  {#each cats as cat, i}
    {@const num = i+1}
    <li>{num}: {cat.name}</li>
  {/each}
</ul>
<!-- with destructuring -->
<ul>
  {#each cats as {name}, i}
    <li>{i + 1}: {name}</li>
  {/each}
</ul>
<!-- with id -->
<ul>
  {#each cats as cat, i (cat.id)}
    <li>{i + 1}: {cat.name}</li>
  {/each}
</ul>


<!-- AWAIT -->
<script>
  async function getRandomNumber() {
    const res = await fetch(`/tutorial/random-number`);
    const text = await res.text();
    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }
  let promise = getRandomNumber();
  function handleClick() {
    promise = getRandomNumber();
  }
</script>
<button on:click={handleClick}>
  generate random number
</button>
{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}


<!-- EVENTS -->
<div on:click={() => console.log('e'))}></div>
<!-- remove the handler after the first time it runs -->
<div on:click|once={() => console.log('e'))}></div>
<!-- calls event.preventDefault() before running the handler. -->
<div on:click|preventDefault={() => console.log('e'))}></div>
<!-- calls event.stopPropagation(), preventing the event reaching the next element -->
<div on:click|stopPropagation={() => console.log('e'))}></div>
<!-- improves scrolling performance on touch/wheel events -->
<div on:click|passive={() => console.log('e'))}></div>
<!-- explicitly set passive: false -->
<div on:click|nonpassive={() => console.log('e'))}></div>
<!-- fires the handler during the capture phase instead of the bubbling phase -->
<div on:click|capture={() => console.log('e'))}></div>
<!-- only trigger handler if event.target is the element itself -->
<div on:click|self={() => console.log('e'))}></div>
<!-- only trigger handler if event.isTrusted is true. I.e. if the event is triggered by a user action. -->
<div on:click|trusted={() => console.log('e'))}></div>
<!-- chain modifiers together -->
<div on:click|once|self={() => console.log('e'))}></div>

<div on:mousemove={() => console.log('e'))}></div>

<!-- improve: https://svelte.dev/tutorial/component-events -->


<!-- CUSTOM EVENTS -->
<!-- App.svelte -->
<script>
  import Child from './Child.svelte';
  let text = '';
</script>
<Child on:customname={(e) => console.log(e.currentTarget)} />
<p>{text}</p>
<!-- Child.svelte -->
<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>
<button on:click={() => dispatch('customname', {text: 'Hey, you clicked'})}>Click me</button>


<!-- BINDINGS -->
<script>
  let text = 'world';
  let num = 2;
  let checked = false;
  let radios = 1;
  let textarea = 'This text is longer';
  let selected = 'one';
</script>
<input bind:value={text}>
<p>Hello {text}!</p>
<input type="number" bind:value={num}>
<p>Num is: {num}</p>
<input type=checkbox bind:checked={checked}>
<p>CHeckbox is checked: {checked}</p>
<label>
  <input type=radio bind:group={radios} name="radios" value={1}>
  One radio
</label>
<label>
  <input type=radio bind:group={radios} name="radios" value={2}>
  Two radios
</label>
<p>Radio selected is: {radios}</p>
<textarea bind:value={textarea}></textarea>
<p>Textarea text is: {textarea}</p>
<!-- can also use select multiple; it will return an array -->
<select bind:value={selected}>
    <option value="one">one</option>
    <option value="two">two</option>
</select>
<p>selected question {selected}</p>


<!-- COMPONENT LIFECYCLE -->
<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte';
  onMount(() => console.log('mounted'));
  onDestroy(() => console.log('destroyed'));
  beforeUpdate(() => console.log('before update'));
  afterUpdate(() => console.log('after update'));
  async function waitForUpdate() {
    console.log(data);
    // something changes data
    // wait for update
    await tick();
    console.log(data);
  }
</script>
<div></div>


<!-- TEST -->
<script>
  let text = 'world';
  $: console.log(text);
</script>
<div>
  {(console.log(text), '')}
  {@debug text}
  <p>{text}</p>
  }
</div>



















