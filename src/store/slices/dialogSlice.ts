import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTime, getUrl } from "../utils";
import {
    ArgSendMessageToBot,
    ChatMethods,
    codesBot,
    SaveDiffsChatAction,
    InitialState,
    SendMessageAction,
} from "./type";

export const initChat = createAsyncThunk("dialog/initChat", async () => {
    try {
        const respons = await fetch(getUrl(ChatMethods.init), {
            method: "POST",
            body: JSON.stringify({
                uuid: codesBot.uuid,
            }),
        });
        const result = await respons.json();
        return result.result.cuid;
    } catch (error) {
        console.log(error);
    }
});

export const botGreeting = createAsyncThunk(
    "dialog/botGreeting",
    async (cuid: string) => {
        try {
            const respons = await fetch(getUrl(ChatMethods.event), {
                method: "POST",
                body: JSON.stringify({
                    cuid,
                    euid: codesBot.greeting,
                }),
            });
            const result = await respons.json();
            return {
                id: result.result.id,
                isMessageBot: true,
                text: result.result.text.value,
                time: getTime(),
            };
        } catch (error) {
            console.log(error);
        }
    }
);

export const sendMessageToBot = createAsyncThunk(
    "dialog/requestToBot",
    async ({ cuid, text }: ArgSendMessageToBot) => {
        try {
            const respons = await fetch(getUrl(ChatMethods.request), {
                method: "POST",
                body: JSON.stringify({
                    cuid,
                    text,
                }),
            });
            const result = await respons.json();
            return {
                id: result.result.id,
                isMessageBot: true,
                text: result.result.text.value,
                time: getTime(),
            };
        } catch (error) {
            console.log(error);
        }
    }
);

const initialState: InitialState = {
    chat: {
        titleChat: "Чат с ботом",
        cuid: "",
        isBotGreeting: false,
        messages: [],
    },
    choosedChat: undefined,
};

export const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        chooseChat: state => {
            state.choosedChat = state.chat;
        },
        saveDiffInChat: (state, action: SaveDiffsChatAction) => {
            state.chat = action.payload;
        },
        sendMessage: (state, action: SendMessageAction) => {
            state.choosedChat?.messages.push(action.payload);
        },
        resetDialog: () => {
            localStorage.clear();
            return initialState;
        },
        initialLocaStorage: (_, action) => {
            return action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(initChat.fulfilled, (state, action) => {
            state.choosedChat!.cuid = action.payload;
        });

        builder.addCase(botGreeting.fulfilled, (state, action) => {
            state.choosedChat?.messages.push(action.payload!);
            state.choosedChat!.isBotGreeting = true;
        });

        builder.addCase(sendMessageToBot.fulfilled, (state, action) => {
            state.choosedChat?.messages.push(action.payload!);
        });
    },
});

export const {
    sendMessage,
    resetDialog,
    chooseChat,
    initialLocaStorage,
    saveDiffInChat,
} = dialogSlice.actions;
export default dialogSlice.reducer;
