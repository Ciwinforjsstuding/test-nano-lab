import React, { MouseEvent } from "react";

import { useTypedSelector, useAction } from "../../../hooks";

import "./chat-item.scss";

export const ChatItem = () => {
    const { chooseChat, saveDiffInChat, resetDialog } = useAction();
    const { choosedChat, chat } = useTypedSelector(state => state.dialog);

    const chatItemHandler = () => {
        if (choosedChat) {
            saveDiffInChat(choosedChat);
        }
        chooseChat();
    };

    const resetChatItemHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        resetDialog();
    };
    const isSelectedChatItem =
        chat.titleChat === choosedChat?.titleChat ? "chat-item_selected" : "";

    return (
        <div className="chat-list">
            <div
                onClick={chatItemHandler}
                className={`chat-item ${isSelectedChatItem}`}
            >
                <span className="chat-item__title">{chat.titleChat}</span>
                <button
                    onClick={resetChatItemHandler}
                    className="chat-item__btn"
                >
                    Очистить
                </button>
            </div>
        </div>
    );
};
