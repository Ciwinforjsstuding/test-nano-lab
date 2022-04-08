import React, { useState, MouseEvent, useEffect } from "react";

import { useTypedSelector, useAction } from "../../hooks";
import { MessageList } from "./MessageList";
import { getTime } from "../../store/utils";

import "./dialog.scss";

export const Dialog = () => {
    const [textMessage, setTextMessage] = useState("");
    const {
        sendMessage,
        botGreeting,
        initChat,
        sendMessageToBot,
        saveDiffInChat,
    } = useAction();
    const { choosedChat, chat } = useTypedSelector(state => state.dialog);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextMessage(event.target.value);
    };

    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        sendMessage({
            id: new Date().getTime(),
            isMessageBot: false,
            text: textMessage,
            time: getTime(),
        });

        sendMessageToBot({ cuid: choosedChat!.cuid, text: textMessage });

        saveDiffInChat(chat);

        setTextMessage("");
    };

    useEffect(() => {
        if (choosedChat!.cuid && !choosedChat?.isBotGreeting) {
            botGreeting(choosedChat!.cuid);
        }
        if (!choosedChat!.cuid) {
            initChat();
        }
        // eslint-disable-next-line
    }, [choosedChat!.cuid]);

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
