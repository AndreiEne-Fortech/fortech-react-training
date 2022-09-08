import IconButton from "./IconButton"
import { BsFillMicFill } from "react-icons/bs"
import React from 'react'

interface ISearchBarProps {
    onValueChanged: React.ChangeEventHandler<HTMLInputElement>
}

export default function SearchBar({ onValueChanged }: ISearchBarProps) {

    return (
        <>
            <form className="search-bar">
                <input type="search" onChange={onValueChanged}></input>
                <IconButton><BsFillMicFill /></IconButton>
            </form>
        </>
    )
}