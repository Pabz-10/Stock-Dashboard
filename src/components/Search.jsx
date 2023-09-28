import React, { useState } from "react"
import { mockSearchResults } from "../constants/mock"
import {XIcon, SearchIcon} from "@heroicons/react/solid"
import { update } from "sneaks-api/models/Sneaker";


const Search = () => {
    const [input, setInput] = useState("");
    // tracks users query for which stock theyre looking for
    const [bestMatches, setBestMatches] = useState(mockSearchResults.result);
   
    const clear = () => {
        //clears our states 
        setInput("");
        setBestMatches([]);
    };

    const updateBestMatches = () => {
        setBestMatches(mockSearchResults.result);
    };

  return (
    <div className=" flex items-center my-4 border-2 rounded-md relative z-50 w-95 bg-white border-neutral-200">
        <input 
            type="text" 
            value={input} className="w-full px-4 py-2 focus:outline-none rounded-md"
            placeholder="Search stock....."
            onChange={(event) => {
                setInput(event.target.value);
            }}
            // onChenage sets our input state value to whatever is typed onto our input element
            onKeyPress={(event) => {
                if (event.key === "Enter") {
                    updateBestMatches();
                }
            }}
        />


        {input && (
            <button onClick={clear}>
                <XIcon className="h-4 w-4 fill-gray-500" />
            </button>
        )}


        <button onClickCapture={updateBestMatches} className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2">
            <SearchIcon className="h-4 w-4 fill-gray-100"/>
        </button>
    </div>
    )
};

export default Search