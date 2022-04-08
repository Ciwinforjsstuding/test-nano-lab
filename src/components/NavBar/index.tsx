import React from "react";
import { ChatItem } from "../Chat/ChatItem";

import "./nav-bar.scss";

export const NavBar = () => {
    return (
        <div className="app-nav-bar">
            <span className="app-nav-bar__title">Чаты</span>
            <ChatItem />
        </div>
    );
};
