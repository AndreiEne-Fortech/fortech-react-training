import Logo from "./Logo"
import SearchBar from "./SearchBar"
import CTAButton from "./CTAButton"
import Link from "./Link"
import './Content.css'

export default function Content({ onValueChanged, onShowValue }) {

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
            <Logo />
            <SearchBar onValueChanged={onValueChanged} />
            <div className="search-buttons">
                <CTAButton onClick={onShowValue}>Search Google</CTAButton>
                <CTAButton>I'm feeling lucky!</CTAButton>
            </div>
            <div className="language">
                <span>Google offered in: </span>
                <Link to="google.ro">Romana</Link>
                <Link to="google.hu">magyar</Link>
                <Link to="google.de">Deutsch</Link>
            </div>
        </div>
    )


}