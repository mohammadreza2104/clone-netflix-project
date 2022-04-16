import React, {useEffect, useState} from 'react';
import './nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            }
            else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY < 100) {
                    handleShow(false)
                }
            })
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=681&h=383&crop=1&resize=681%2C383"
                alt="Netflix logo"
            />
            <img
                className="nav_avatar"
                src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=681&h=383&crop=1&resize=681%2C383"
                alt="Netflix logo"
            />
        </div>
    );
};

export default Nav;