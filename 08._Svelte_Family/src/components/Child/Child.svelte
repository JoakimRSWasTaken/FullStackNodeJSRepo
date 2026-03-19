<script>
let { name, familySheep, isGirl } = $props();

</script>

<div 
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h3>I'm just a kid known as {name}.</h3>
</div>

<style>
div {
    color: black;
}

.black-sheep {
    background-color: rebeccapurple;
}

.grey-sheep {
    background-color: goldenrod;
}

.not-a-sheep {
    background-color: darkred;
}

.is-girl {
    border: 4px dashed plum;
}

.is-boy {
    border: 4px solid darkcyan;
}

</style>