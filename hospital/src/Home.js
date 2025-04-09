import React from 'react';
import Chat from "./Chat";


export default function Home(){
    let [libraryImported, setLibraryImported] =  React.useState(false);


    React.useEfffect(()=>{
        window.CommetChat = require("@cometchat/chat-sdk-javascript").CommetChat;
        setLibraryImported(true);
    })

    return libraryImported ? <Chat/> : <p>Loading.....</p>;
}
