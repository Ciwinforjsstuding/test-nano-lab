import React from "react";
import { useTypedSelector } from "../../../hooks";
import { Message } from "../../../store/slices/type";

import { TextMessage } from "../Message";
import "./message-list.scss";

export const MessageList = () => {
    const { choosedChat } = useTypedSelector(state => state.dialog);
    return (
        <div className="messages-list">
            {choosedChat?.messages.map((message: Message) => (
                <TextMessage key={message.id} message={message} />
            ))}
        </div>
    );
};
