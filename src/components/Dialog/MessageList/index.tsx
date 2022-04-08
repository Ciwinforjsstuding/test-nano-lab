import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Message } from "../../../store/slices/dialogSlice";

import { TextMessage } from "../Message";
import "./message-list.scss";

export const MessageList = () => {
    const { choosedChat } = useSelector((state: RootState) => state.dialog);
    return (
        <div className="messages-list">
            {choosedChat?.messages.map((message: Message) => (
                <TextMessage key={message.id} message={message} />
            ))}
        </div>
    );
};
