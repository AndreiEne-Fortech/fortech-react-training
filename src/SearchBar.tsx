import IconButton from "./IconButton"
import { BsFillMicFill } from "react-icons/bs"
import React, { useContext } from 'react'
import { MyContext } from "./MyContext"

export default function SearchBar() {
    const onValueChanged = useContext(MyContext)
    return (
        <>
            <form className="search-bar">
                <input type="search" onChange={onValueChanged}></input>
                <IconButton><BsFillMicFill /></IconButton>
            </form>
        </>
    )
}