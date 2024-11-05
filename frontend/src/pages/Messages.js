import './Messages.css';

export default function Home() {
    return (
        <div className="split-page">
            <div className="message-list">
                <h2>Messages</h2>
                <p>This container will contain a list of friends/people you have messaged</p>
            </div>

            <div className="message-container">
                <p>This container will be a component that contains messages with specific people, and contain the functionality needed to send/receive messages with other users</p>
            </div>
        </div>
    )
}