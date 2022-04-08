import { Store } from "@reduxjs/toolkit";
import { ChatMethods } from "./slices/type";

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

export const saveToLocalStorage = (store: Store) => {
    localStorage.setItem("chats", JSON.stringify(store.getState().dialog));
};

export const getUrl = (method: ChatMethods) =>
    `https://biz.nanosemantics.ru/api/2.1/json/Chat.${method}`;

export const getTime = () =>
    `${new Date().getHours()}:${new Date().getMinutes()}`;
