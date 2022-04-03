import React from "react";
import { Message } from "../../../store/slices/dialogSlice";

interface Props {
    message: Message;
}

export const TextMessage = ({ message }: Props) => {
    return (
        <div className="message">
            <span className="message__text">{message.text}</span>
            <span className="message__time">{message.time}</span>
        </div>
    );
};
