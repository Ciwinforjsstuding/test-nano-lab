import React, { useState, MouseEvent } from "react";
import { useAction } from "../../hooks/useAction";

export const Dialog = () => {
    const [textMessage, setTextMessage] = useState("");
    const { sendMessage } = useAction();
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextMessage(event.target.value);
    };
    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        sendMessage(textMessage);
    };

    return (
        <form className="dialog">
            {/* тут у нас будут сообщения */}
            <div className="dialog-footer">
                <input
                    value={textMessage}
                    onChange={inputHandler}
                    type="text"
                    className="dialog-footer__input"
                />
                <button onClick={onClickHandler} className="dialog-footer__btn">
                    Отправить
                </button>
            </div>
        </form>
    );
};
