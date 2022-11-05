import React, { useState, useEffect } from 'react';
import styles from './Navfoot.module.css';
import { HashLink } from 'react-router-hash-link';

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
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
                <HashLink
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to="/">
                    <li>
                        <img className={styles.ilogo} src='./../images/logo.png' />
                    </li>
                </HashLink>

                {(toggleMenu || screenWidth > 1000) && (
                    <>
                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#home">
                            <li className={styles.items}>Home</li>
                        </HashLink>
                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#projects">
                            <li className={styles.items}>Project</li>
                        </HashLink>
                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#gallery">
                            <li className={styles.items}>Gallery</li>
                        </HashLink>
                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#about">
                            <li className={styles.items}>About Us</li>
                        </HashLink>
                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#testi">
                            <li className={styles.items}>Testimonials</li>
                        </HashLink>
                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#contact">
                            <li className={styles.items}>Contact Us</li>
                        </HashLink>
                    </>
                )}
            </ul>

            <button onClick={toggleNav} className={styles.btn}><img src='./../images/line.png' /></button>
        </nav>
    )
}

export default Navbar;