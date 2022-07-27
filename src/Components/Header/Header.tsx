import HeaderLogo from "./HeaderLogo"
import HeaderSearchbar from "./HeaderSearchbar"
import './Header.css'

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

function Header ({setSearch}: Props) {
    return (
        <header className="header">
        <HeaderLogo />
        <HeaderSearchbar setSearch={setSearch}/>
      </header>
    )
}

export default Header