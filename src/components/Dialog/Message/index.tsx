import React from "react";
import { Message } from "../../../store/slices/dialogSlice";

import "./message.scss";
interface Props {
    message: Message;
}

export const TextMessage = ({ message }: Props) => {
    const currentMessage = message.isMessageBot ? "bot" : "user";
    return (
        <div className={`message message-${currentMessage}`}>
            <span className="message__text">{message.text}</span>
            <span className="message__time">{message.time}</span>
        </div>
    );
};
