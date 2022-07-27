import './StarredEmails.css'

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
    starredEmails: Email []
}


function StarredEmails(props:Props) {
    return (
        <li
            className={`item ${props.currentTab === "starred" ? "active" : ""}`}
            onClick={() => props.setCurrentTab("starred")}
        >
            <span className="label">Starred</span>
            <span className="count">{props.starredEmails.length}</span>
        </li>
    )
}

export default StarredEmails