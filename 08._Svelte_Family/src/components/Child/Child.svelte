<script>
    let {
        name,
        familySheep,
        isGirl,
        onShowLove,
        onTakeCookie,
        monsterEnergyFridge = $bindable(),
    } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    let fridgeMessageInput = $state("");

    function handleSubmitFridgeMessage() {
        console.log(fridgeMessageInput);
        const fridgeMessageToCreate = {
            name,
            message: fridgeMessageInput
        }
        // Here we set the new value
        // $fridgeMessages.push(fridgeMessageToCreate);
        // fridgeMessages.set($fridgeMessages);
        
        // Here we update the value with the new one
        fridgeMessages.update((fridgeMessageStoreValue) => {
            fridgeMessageStoreValue.push(fridgeMessageToCreate);
            return fridgeMessageStoreValue;
        });

        fridgeMessageInput = "";
    }

</script>
<!-- $bindable() is a two way bind of the prop between parent and child. Only in Svelte -->

<div
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h3>I'm just a kid known as {name}.</h3>
</div>

<div id="button-container">
    <button onclick={() => onShowLove(name)}>❤️ Show Love ❤️</button>
    <button onclick={() => onTakeCookie(name)}>🍪 Take Cookie 🍪</button>
    <button onclick={() => monsterEnergyFridge.pop()}
        >🔋 Drink Battery Acid flavored Monster Energy 🔋</button
    >
</div>
<br>
<input bind:value={fridgeMessageInput} placeholder="Type your fridge message...">
<button id="fridge-message-submit-button" onclick={handleSubmitFridgeMessage}>Write the fridge message</button>

<style>
    div {
        color: black;
    }

    button {
        color: black;
        background-color: darksalmon;
        border-radius: 1em;
        border: 1px solid black;
        margin-bottom: 0.2em;
    }

    #button-container {
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
