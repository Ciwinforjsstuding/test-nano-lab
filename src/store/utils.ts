import { Store } from "@reduxjs/toolkit";
import { ChatMethods } from "./slices/type";

export const getStoreFromLocalStorage = () => {
    try {
        const store = localStorage.getItem("store");
        if (store) {
            return JSON.parse(store);
        }
    } catch (error) {
        console.log(error);
    }
};

export const saveToLocalStorage = (store: Store) => {
    localStorage.setItem("store", JSON.stringify(store.getState().dialog));
};

export const getUrl = (method: ChatMethods) =>
    `https://biz.nanosemantics.ru/api/2.1/json/Chat.${method}`;

export const getTime = () =>
    `${new Date().getHours()}:${new Date().getMinutes()}`;
