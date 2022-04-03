import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const MessageList = () => {
    const {messages} = useSelector((state: RootState) => state.dialog)
    return (
        <div className="messages-list">
            {messages.map(message => (
                
            ))}
        </div>
    )
}