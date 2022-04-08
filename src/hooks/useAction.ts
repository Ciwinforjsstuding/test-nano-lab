import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
    resetDialog,
    sendMessage,
    chooseChat,
    saveDiffInChat,
    initialLocaStorage,
} from "../store/slices/dialogSlice";

import {
    initChat,
    botGreeting,
    sendMessageToBot,
} from "../store/slices/dialogSlice";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        {
            initChat,
            resetDialog,
            sendMessage,
            chooseChat,
            botGreeting,
            saveDiffInChat,
            sendMessageToBot,
            initialLocaStorage,
        },
        dispatch
    );
};
