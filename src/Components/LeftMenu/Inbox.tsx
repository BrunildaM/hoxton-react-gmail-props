import './Inbox.css'

type Email = {
    id: number;
    sender: string;
    title: string;
    starred: boolean;
    read: boolean;
}

type Props = {
    currentTab: string
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>
    unreadEmails: Email []
}

function Inbox (props: Props) {
    return (
        <li
                    className={`item ${props.currentTab === "inbox" ? "active" : ""}`}
                    onClick={() => props.setCurrentTab("inbox")}
                >
                    <span className="label">Inbox</span>
                    <span className="count">{props.unreadEmails.length}</span>
                </li>
    )
}

export default Inbox