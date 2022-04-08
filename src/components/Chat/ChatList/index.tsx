import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ChatItem } from "../ChatItem";

import "./chat-list.scss";

export const ChatList = () => {
    const { chats } = useSelector((state: RootState) => state.dialog);
    return (
        <div className="chat-list">
            {chats.map(chat => (
                <ChatItem key={chat.titleChat} title={chat.titleChat} />
            ))}
        </div>
    );
};
