import { useState } from "react";

import initialEmails, { Email } from "./data/emails";

import "./App.css";
import Header from "./Components/Header/Header";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import Emails from "./Components/Emails/Emails";

const getReadEmails = (emails: Email[]) =>
  emails.filter((email) => !email.read);

const getStarredEmails = (emails: Email[]) =>
  emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [search, setSearch] = useState('')

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail: Email) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail: Email) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };






  let filteredEmails = emails;

  if (hideRead)
    filteredEmails = getReadEmails(filteredEmails);


  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);


  if (search !== '')
    filteredEmails = filteredEmails.filter(email =>
      email.title.toLowerCase().includes(search.toLowerCase()))




  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <Emails
        filteredEmails={filteredEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
      />
    </div>
  );
}

export default App;
