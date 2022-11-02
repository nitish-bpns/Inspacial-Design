import React, { useState, useEffect } from 'react';
import styles from './Navfoot.module.css';
function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])


    return (

        <nav>
            <ul className={styles.list}>
                <li>
                    <img className={styles.ilogo} src='./../images/logo.png' />
                </li>

                {(toggleMenu || screenWidth > 500) && (
                    <>
                        <li className={styles.items}>Home</li>
                        <li className={styles.items}>Project</li>
                        <li className={styles.items}>Gallery</li>
                        <li className={styles.items}>About Us</li>
                        <li className={styles.items}>Testimonials</li>
                        <li className={styles.items}>Contact Us</li>
                    </>
                )}
            </ul>

            <button onClick={toggleNav} className={styles.btn}><img src='./../images/line.png' /></button>
        </nav>
    )
}

export default Navbar;