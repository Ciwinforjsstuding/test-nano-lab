import React, { useState, MouseEvent } from "react";
import { useAction } from "../../hooks/useAction";
import { MessageList } from "./MessageList";
import "./dialog.scss";

export const Dialog = () => {
    const [textMessage, setTextMessage] = useState("");
    const { sendMessage } = useAction();

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextMessage(event.target.value);
    };

    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        sendMessage({
            id: new Date().getTime(),
            isMessageBot: false,
            text: textMessage,
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        });
        setTextMessage("");
    };

    return (
        <form className="dialog">
            <MessageList />
            <div className="dialog-footer">
                <input
                    value={textMessage}
                    onChange={inputHandler}
                    type="text"
                    className="dialog-footer__input"
                />
                {textMessage && (
                    <button
                        onClick={onClickHandler}
                        className="dialog-footer__btn"
                    >
                        Отправить
                    </button>
                )}
            </div>
        </form>
    );
};
