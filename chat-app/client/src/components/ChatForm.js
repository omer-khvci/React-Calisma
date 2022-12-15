import React, {useState} from 'react';
import styles from './styles.module.css'
import {sendMessage} from "../socketApi";
import {useChat} from "../context/ChatContext";
function ChatForm(props) {
    const [message, setMessage] = useState("");
    const {setMessages} = useChat();
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages((prevState) => [...prevState,{message, fromMe:true}]);
        sendMessage(message);
        setMessage("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={styles.textInput}
                />
            </form>
        </div>
    );
}

export default ChatForm;