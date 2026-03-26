import { writable } from "svelte/store";

// To create a custom store, we need to make a subscribe function. We will never use it, but it is needed.
// We can also make extra functions

function createFridge() {
    const defaultMessage = {
        name: "",
        message: "Write your message on the fridge"
    };

    const { set, update, subscribe } = writable([defaultMessage]);

    return {
        set,
        update,
        subscribe,
        wipe: () => set([defaultMessage])
    }
}

export const fridgeMessages = createFridge();

// This is using writable() directly.
// export const fridgeMessages = writable([
//     // Store wants objects to be of the same structure, which is why name is there, but empty
//     {
//         name: "",
//         message: "Write your message on the fridge"
//     }
// ]);

