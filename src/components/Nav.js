import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import "./css/Nav.css"

function Nav() {
    const [show, handelShow] = useState(false)
    const history = useHistory()
    const scrollFunction = () => {
        if (window.scrollY > 100) {
            handelShow(true);
        } else handelShow(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                onClick={() => history.push("/")}
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo" />
            <img
                onClick={() => history.push("/profile")}
                className="nav_avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="avatar" />
        </div>
    )
}

export default Nav
