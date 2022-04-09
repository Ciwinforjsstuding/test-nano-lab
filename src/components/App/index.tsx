import React, { useEffect } from "react";
import { useTypedSelector, useAction } from "../../hooks";
import { getChatsFromLocalStorage } from "../../store/utils";
import { Dialog } from "../Dialog";
import { NavBar } from "../NavBar";
import { UnselectedСhatItem } from "../UnselectedСhatItem";

import "./app.scss";

export const App = () => {
    const { initialLocaStorage } = useAction();
    const { choosedChat } = useTypedSelector(state => state.dialog);

    useEffect(() => {
        const chats = getChatsFromLocalStorage();
        initialLocaStorage(chats);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="app">
            <NavBar />
            {choosedChat && <Dialog />}
            {!choosedChat && <UnselectedСhatItem />}
        </div>
    );
};
