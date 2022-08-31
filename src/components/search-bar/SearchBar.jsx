import { useState } from 'react'

import './search-bar.scss'

const SearchBar = ({ setSearchTerm, setLoaded, bool }) => {

    const [value, setValue] = useState("Tesla")
    const [showSearchBar, setShowSearchBar] = useState(null)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const submit = () => {
        setLoaded(false)
        setSearchTerm(value)
    }

    return (
        <div className="search-bar" onMouseEnter={() => setShowSearchBar(true)} onMouseLeave={() => setShowSearchBar(false)}>
            <div style={showSearchBar || value || bool !== "" ? {transform: "translateY(0)", border: bool ? "2px solid rgba(150, 150, 150, 0.3)" : "1px solid rgba(150, 150, 150, 0)"} : {transform: "translateY(-200%)"}} className="search-bar-container">
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