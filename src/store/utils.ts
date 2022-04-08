import { Store } from "@reduxjs/toolkit";

export const getChatsFromLocalStorage = () => {
    try {
        const chats = localStorage.getItem("chats");
        if (chats) {
            return JSON.parse(chats);
        }
    } catch (error) {
        console.log(error);
    }
};

export const saveToLocalStorage = (store: Store) =>
    localStorage.setItem("chats", JSON.stringify(store.getState().dialog));
