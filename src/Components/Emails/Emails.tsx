import SingleEmail from "./SingleEmail";
import './Emails.css'


type Email = {
    id: number;
    sender: string;
    title: string;
    starred: boolean;
    read: boolean;
}


type Props = {
    getFilteredEmails: () => Array<Email>
    toggleRead: (targetEmail: Email) => void
    toggleStar: (targetEmail: Email) => void
}


function Emails(props: Props) {
    return (
        <main className="emails">
            <ul>
                {props.getFilteredEmails().map((email, index) => (
                    <SingleEmail
                        key={index}
                        index={email.id}
                        email={email}
                        toggleRead={props.toggleRead}
                        toggleStar={props.toggleStar}
                    />
                ))}
            </ul>
        </main>
    )
}

export default Emails