"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navbarLink/navLink";

const Links = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { path: "/", title: "Home" },
        { path: "/about", title: "About" },
        { path: "/contact", title: "Contact" },
        { path: "/blog", title: "Blog" },
    ];

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <NavLink link={link} key={index} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink
                                link={{ title: "Admin", path: "/admin" }}
                            />
                        )}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink link={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <button className={styles.menuButton} onClick={()=>setIsOpen(prev=>!prev)}>Menus</button>
            {isOpen && (
                <div className={styles.mobileLinks}>
                    {links.map((link, index) => (
                        <NavLink link={link} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
