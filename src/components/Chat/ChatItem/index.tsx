import React from "react";
import { useSelector } from "react-redux";

import { useAction } from "../../../hooks/useAction";
import { RootState } from "../../../store";

import "./chat-item.scss";

interface Props {
    title: string;
}

export const ChatItem = ({ title }: Props) => {
    const { chooseChat, saveDiffInChat, resetDialog } = useAction();
    const { choosedChat } = useSelector((state: RootState) => state.dialog);

    const chatItemHandler = () => {
        saveDiffInChat(choosedChat!);
        chooseChat(title);
    };

    const isSelectedChatItem =
        title === choosedChat?.titleChat ? "chat-item_selected" : "";

    return (
        <div
            onClick={chatItemHandler}
            className={`chat-item ${isSelectedChatItem}`}
        >
            <span className="chat-item__title">{title}</span>
            <button onClick={resetDialog} className="chat-item__btn">
                Очистить
            </button>
        </div>
    );
};
