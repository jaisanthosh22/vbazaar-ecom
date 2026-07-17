import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handlerSearch(e) {
        setSearch(e.target.value);
    }

    function handleSearchClick() {
        if (search.trim() !== "") {
            navigate(`/?keyword=${encodeURIComponent(search)}`);
        } 
        else {
            navigate("/");
        }
    }

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search for products..."
                value={search}
                onChange={handlerSearch}
            />

            <button
                aria-label="search"
                onClick={handleSearchClick}
            >
                🔍
            </button>
        </div>
    );
}

export default Search;