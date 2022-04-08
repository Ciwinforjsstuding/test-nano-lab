export interface Message {
    readonly id: number;
    isMessageBot: boolean;
    text: string;
    time: string;
}
export interface Chat {
    titleChat: string;
    cuid: string;
    isBotGreeting: boolean;
    messages: Message[];
}
export interface SendMessageAction {
    type: string;
    payload: Message;
}

export interface SaveDiffsChatAction {
    type: string;
    payload: Chat;
}
export interface InitialState {
    chat: Chat;
    choosedChat: undefined | Chat;
}

export enum codesBot {
    greeting = "00b2fcbe-f27f-437b-a0d5-91072d840ed3",
    uuid = "772c9859-4dd3-4a0d-b87d-d76b9f43cfa4",
}

export enum ChatMethods {
    init = "init",
    event = "event",
    request = "request",
}

export interface ArgSendMessageToBot {
    cuid: string;
    text: string;
}
