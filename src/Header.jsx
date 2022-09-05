import { TbGridDots } from 'react-icons/tb'
import CTAButton from './CTAButton'
import Link from './Link'
import IconButton from './IconButton'
import './GoogleHeader.css'

const Header = () => {
    return (
        <div className="GoogleHeader">
            <Link to="gmail.com">Gmail</Link>
            <Link to="images.com">Images</Link>
            <IconButton><TbGridDots /></IconButton>
            <CTAButton>Sign up!</CTAButton>
        </div>
    )
}

export default Header;