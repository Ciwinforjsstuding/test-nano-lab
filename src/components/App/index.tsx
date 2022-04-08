import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { RootState } from "../../store";
import { getChatsFromLocalStorage } from "../../store/utils";
import { Dialog } from "../Dialog";
import { NavBar } from "../NavBar";

import "./app.scss";

export const App = () => {
    const { initialLocaStorage } = useAction();
    const { choosedChat } = useSelector((state: RootState) => state.dialog);
    useEffect(() => {
        const chats = getChatsFromLocalStorage();
        initialLocaStorage(chats);
        /*eslint-disable */
    }, []);
    return (
        <div className="app">
            <NavBar />
            {choosedChat && <Dialog />}
        </div>
    );
};
