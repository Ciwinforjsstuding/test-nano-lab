import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { resetDialog, sendMessage } from "../store/slices/dialogSlice";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        {
            resetDialog,
            sendMessage,
        },
        dispatch
    );
};
