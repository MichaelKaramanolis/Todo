import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List'

const Search = () => {

    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        let timerid = null;
        if (value) {
            timerid = setTimeout(async () => { //wrap the function with async
                const { data } = await axios.get("https://en.wikipedia.org/w/api.php", { // sothat we can await for the response here
                    params: {
                        action: "query",
                        list: 'search',
                        origin: "*",
                        format: "json",
                        srsearch: value
                    }
                });
               setResults(data.query.search);
            }, 1000);
        }

        //clear the previous timer by using the return effect from the useeffect hook
        return () => {
            clearTimeout(timerid);
        };
    }, [value]);//we place the value in the array sothat we call it every time it is changed


    return (
        <React.Fragment>
            <form className='ui form'>
                <input
                    type="text"
                    placeholder='Search Wikipedia...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <List results={results} />
        </React.Fragment>
    )
}


export default Search