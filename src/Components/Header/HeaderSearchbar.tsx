import './HeaderSearchbar.css'

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

function HeaderSearchbar ({setSearch}: Props) {
    return (
        <div className="search">
          <input className="search-bar" 
          placeholder="Search mail"
          onChange={e => setSearch(e.target.value)}
          
          />
        </div>
    )
}

export default HeaderSearchbar