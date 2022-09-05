import IconButton from "./IconButton"
import { BsFillMicFill } from "react-icons/bs"

export default function SearchBar() {
    return (
        <>
            <form className="search-bar">
                <input type="search"></input>
                <IconButton><BsFillMicFill /></IconButton>
            </form>
        </>
    )
}