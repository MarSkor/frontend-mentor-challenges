import React, { useState } from "react"
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../public/assets/shared/logo.svg"
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const navigationRoutes = ["home", "destination", "crew", "technology"]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const router = useRouter();

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      
    }

  return (
    <nav className='nav-container'>
        <span className='logo'>
            <Image src={Logo} alt="logo"/>
        </span>
        <hr className="navbar-line" />
        <button 
        onClick={handleToggle}
        className={navbarOpen ? "nav-toggle active" : "nav-toggle"}
        aria-controls="primary-navigation" 
        aria-expanded="false">
            {navbarOpen ? <AiOutlineClose className="nav-icon close"/> : <AiOutlineMenu className="nav-icon menu"/>}
            <span className='sr-only'>Menu</span>
        </button>

        <ul id='primary-navigation' className={`primary-navigation underline-indicators ${navbarOpen ? "showMenu" : ""}`}>
        {navigationRoutes.map((singleRoute, index) => {
            return(
                <NavigationLink
                key={singleRoute}
                href={`/${singleRoute}`}
                text={singleRoute}
                router={router}
                number={`0${index}`}
                />
            )
        })}
        </ul>
    </nav>
  )
}


const NavigationLink = ({ href, text, router, number}) => {
    const isActive = router.asPath === (href === "/home" ? "/" : href);

    return(
        <li className="nav-item">
            <Link legacyBehavior href={href === "/home" ? "/" : href} passHref>
                <a href={href === "/home" ? "/" : href} className={`${isActive && "nav-link active"} nav-link`}>
                    <span aria-hidden="true" className='nav-number'>{number}</span>{text}
                </a>
            </Link>
        </li>
    )

}

export default Navbar