<script>
    import Child from "../Child/Child.svelte";

    let { name, children } = $props();


</script>

<h1>My name is {name}.</h1>

<!-- You can do this without the (child.name) but it is good to key the elements in the each.
If you don't, and want to remove elements with DOM manipulation, you will get problems -->

{#each children as child (child.name)}
    <Child {...child}/>
{/each}