import { useState } from 'react'

import './search-bar.scss'

const SearchBar = ({ setSearchTerm, setLoaded, content }) => {

    const [value, setValue] = useState("Tesla")
    const [showSearchBar, setShowSearchBar] = useState(null)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const submit = () => {
        if (value !== "") {
            setLoaded(false)
            setSearchTerm(value)
        }
    }

    return (
        <div className="search-bar" onMouseEnter={() => setShowSearchBar(true)} onMouseLeave={() => setShowSearchBar(false)}>
            <div style={showSearchBar || value !== "" || content === [] ? {transform: "translateY(0)"} : {transform: "translateY(-200%)"}} className="search-bar-container">
                <input type="text" value={value} onChange={handleChange} placeholder="Search anything..." />
                <div>
                    <button onClick={submit}>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar