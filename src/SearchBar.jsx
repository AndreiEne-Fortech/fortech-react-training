import IconButton from "./IconButton"
import { BsFillMicFill } from "react-icons/bs"

export default function SearchBar({ onValueChanged }) {

    return (
        <>
            <form className="search-bar">
                <input type="search" onChange={onValueChanged}></input>
                <IconButton><BsFillMicFill /></IconButton>
            </form>
        </>
    )
}