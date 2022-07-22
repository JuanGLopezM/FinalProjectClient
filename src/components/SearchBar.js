import React, { useState } from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })
        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };
    return (
        <div className="search">
            <div>
            <div className="searchInputs">
            <form class="form-inline my-2 my-lg-0 navbar-right ml-auto">
              <input class="form-control mr-sm-2 navbar-right"type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} aria-label="Search"  />
             <button class="btn btn-outline-success my-2 my-sm-0 navbar-right" type="submit">{filteredData.length === 0 ? ( <SearchIcon /> ) : ( <CloseIcon id="clearBtn" onClick={clearInput} />)}</button>
            </form>
          </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return (
                            <div className="dataItem">
                                <p>{value.title}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
        </div>
    )
}
export default SearchBar