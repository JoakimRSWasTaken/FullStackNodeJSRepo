<script>
import { fridgeMessages } from "../../stores/fridgeStore.js";

// Putting a $ in front gets you the object. Without it you get the Store itself.
console.log($fridgeMessages);

</script>

{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage.name || "Household"}: {fridgeMessage.message}</p>
{/each}

<slot></slot>

<div id="welcome-mat">
    <p>Go Away...</p>
</div>

<style>
    #welcome-mat {
        font-weight: bold;
        background-color: rgb(143, 109, 65);
        color: rgb(71, 52, 14);
        padding: 2em;
        margin: 0 20em 0 20em;
        border-radius: 0 0 1.5em 1.5em;
    }
</style>
