import React from "react";
import { ChatList } from "../Chat/ChatList";

import "./nav-bar.scss";

export const NavBar = () => {
    return (
        <div className="app-nav-bar">
            <span className="app-nav-bar__title">Чаты</span>
            <ChatList />
        </div>
    );
};
