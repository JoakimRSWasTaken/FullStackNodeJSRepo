<script>
    import Child from "../Child/Child.svelte";

    let { name, children } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    // To send data up through the tree, you want to use handle and on
    function handleShowLove(name) {
        console.log(`${name} loves you.`);
    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪"]);

    let monsterEnergyFridge = $state(["🔋", "🔋", "🔋", "🔋", "🔋"]);

    function handleTakeCookie(name) {
        cookieJar.pop();
        console.log(`${name} took a cookie! ${cookieJar.length} left!`);
    }

    // function removeCookie() {
    //     cookieJar.pop();
    //     // This would work on older Svelte to trigger an update in the rendering.
    //     //cookieJar = [...cookieJar];
    // }
</script>

<button onclick={fridgeMessages.wipe}>Wipe Fridge Clean of Messages</button>

<h1>My name is {name}.</h1>

{#each cookieJar as cookie}
    <span>{cookie}</span>
{/each}
<!-- This belongs to the old way to do this in Svelte 
<button onclick={removeCookie}>Remove cookie</button>
 -->
<br />

{#each monsterEnergyFridge as drink}
    <span>{drink}</span>
{/each}

<!-- You can do this without the (child.name) but it is good to key the elements in the each.
If you don't, and want to remove elements with DOM manipulation, you will get problems -->
{#each children as child (child.name)}
    <Child
        {...child}
        onShowLove={handleShowLove}
        onTakeCookie={handleTakeCookie}
        {monsterEnergyFridge}
    />
{/each}

<style>
    button {
        color: black;
        background-color: darksalmon;
        border-radius: 1em;
        border: 1px solid black;
        margin-bottom: 0.2em;
    }
</style>
