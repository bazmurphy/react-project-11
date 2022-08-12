import React from "react"

export default function FourApp() {
    const [messages, setMessages] = React.useState(["a", "b"])

    // [1]
    // let text;
    // if (messages.length > 1) {
    //     text = `You have ${messages.length} unread messages`
    // } else if (messages.length > 0) {
    //     text = `You have ${messages.length} unread message`
    // } else {
    //     text = "You're all caught up!"
    // }

    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}!</h1>
            }
            
            {/*

            [1]
            {text}

            [2]
            {
                messages.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>You have {messages.length} unread message{messages.length > 1 && "s"}</h1>
            }

            [4]
            {
                messages.length > 1 ? 
                `You have ${messages.length} unread messages` : 
                messages.length > 0 ? 
                `You have ${messages.length} unread message` : 
                "You're all caught up!"
            }
            
            */}
        </div>
    )
}

/**
 * Challenge:
 * - If there are no unread messages, display "You're all caught up!"
 * - If there are > 0 unread messages, display "You have <n> unread
 *   message(s)"
 *      - If there's exactly 1 unread message, it should read "message"
 *        (singular)
 */