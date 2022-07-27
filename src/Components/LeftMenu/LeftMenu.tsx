import HideRead from "./HideRead";
import Inbox from "./Inbox";
import StarredEmails from "./StarredEmails";
import './LeftMenu.css'

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
    starredEmails: Email []
    hideRead: boolean
    setHideRead: React.Dispatch<React.SetStateAction<boolean>>
}


function LeftMenu({currentTab, setCurrentTab, unreadEmails, starredEmails, hideRead, setHideRead}: Props) {
    return (
        <nav className="left-menu">
            <ul className="inbox-list">
                <Inbox  
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                unreadEmails= {unreadEmails}
                />
                
                <StarredEmails 
                currentTab= {currentTab}
                setCurrentTab={setCurrentTab}
                starredEmails={starredEmails}
                />

                <HideRead 
                hideRead={hideRead}
                setHideRead={setHideRead}
                />
            </ul>
        </nav>
    )
}

export default LeftMenu