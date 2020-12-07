import React from 'react';
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';

export default function Layout() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <ChatList />
                    <MessageField />
                </div>
            </div>
        </div>
    );
}
