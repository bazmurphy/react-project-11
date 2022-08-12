import React from "react"

export default function TwoApp() {
    const [messages, setMessages] = React.useState(["a", "b"])

    return (
        <div>
            {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
        </div>
    )
}

/**
 * Challenge:
 * - Only display the <h1> below if there are unread messages
 */