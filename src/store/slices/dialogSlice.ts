import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

export interface Message {
    readonly id: number;
    isMessageBot: boolean;
    text: string;
    time: string;
}
export interface Chat {
    titleChat: string;
    messages: Message[];
}
interface SendMessageAction {
    type: string;
    payload: Message;
}

interface DiffsChatAction {
    type: string;
    payload: Chat;
}

interface ChooseChatAction {
    type: string;
    payload: string;
}
export interface InitialState {
    chats: Chat[];
    choosedChat: undefined | Chat;
}

const initialState: InitialState = {
    chats: [
        {
            titleChat: "Чат с ботом",
            messages: [
                {
                    id: 1,
                    isMessageBot: false,
                    text: "Test to bot",
                    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                },
            ],
        },
        {
            titleChat: "Тестовый чат",
            messages: [
                {
                    id: 1,
                    isMessageBot: false,
                    text: "Test message",
                    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                },
            ],
        },
    ],
    choosedChat: undefined,
};

export const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        chooseChat: (state, action: ChooseChatAction) => {
            state.choosedChat = state.chats.find(
                chat => chat.titleChat === action.payload
            );
        },
        saveDiffInChat: (state, action: DiffsChatAction) => {
            const { chats, choosedChat } = state;
            if (choosedChat) {
                const saveDiffs = chats.map(chat => {
                    if (chat.titleChat === choosedChat?.titleChat) {
                        return action.payload;
                    }
                    return chat;
                });
                return {
                    chats: [...(saveDiffs ? saveDiffs : state.chats)],
                    choosedChat,
                };
            }
        },
        sendMessage: (state, action: SendMessageAction) => {
            state.choosedChat?.messages.push(action.payload);
        },
        resetDialog: () => {
            localStorage.clear();
        },
        initialLocaStorage: (_, action) => {
            return action.payload;
        },
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
