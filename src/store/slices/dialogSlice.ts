import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        {
            id: 1,
            isMessageBot: false,
            text: "Test message-1",
            time: new Date(),
        },
        {
            id: 2,
            isMessageBot: false,
            text: "Test message-2",
            time: new Date(),
        },
        {
            id: 3,
            isMessageBot: false,
            text: "Test message-3",
            time: new Date(),
        },
        {
            id: 4,
            isMessageBot: false,
            text: "Test message-4",
            time: new Date(),
        },
        {
            id: 5,
            isMessageBot: false,
            text: "Test message-5",
            time: new Date(),
        },
    ],
};

export const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        resetDialog: state => {
            state.messages = [];
        },
    },
});

export const { sendMessage, resetDialog } = dialogSlice.actions;
export default dialogSlice.reducer;

// fetch('https://biz.nanosemantics.ru/api/2.1/json/Chat', {
//     method: 'POST',
//     body: '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4',
// }).then(res => {
//     console.log(res);
//     res.json();
// }).then(data => console.log(data));
