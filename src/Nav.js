import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
            
        });
        
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className="nav__logo"
            scr="https://flyclipart.com/thumb2/netflix-82871.png"
            alt="Netflix Logo"
        />

        <img 
            className="nav__avatar"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACfCAMAAADQxfvSAAAAYFBMVEUNfoD///8AeXsAdngAcXMAc3bi7u76/f1zqqva5ucuhogAbXDS5OTr8vKFtbby+PiUvr+ew8Swzs/K2tu61tfI3t5CkZOKvLybxsdWmpyrz88hgoRjoKFTnp/B2Nkri439sxlbAAACuklEQVR4nO3Zf5eiIBQGYL3+gAwVTWgM0+//LVe3thK3KRyZnT3nff7sHG6XiwJCEAAAAAAAAAAAAAAAAAA4iOKI9gn5Ck/xfvqL1e31UeR5+tEGXjIk057SPBeFXhWezKkML3q9vo9PJa26hi/liuZkduFNvq6Ln8bn5T1+797eiDD0mCB15WP8xrm9DMMvBXgVX8zjF479N/m8fdhuWkDiVnhh3NqfrfZhlWyZX9zb8d36n1R2+3TT/ILUjn90miL2apHfpuM7LPJzG59l/X9WftHRbr+Lt8wv2tnxC6fxpdZu/7Hp85fUdnzH+cFY8xMbtp1f7P67riBUsFn7euv1o5l3nzvHn42AGLZNLyA9e0Mq9+5Tfa+gyLbfH2T3V6SsVu2PimsXWWU8bABpOF0LkLoP7iUCaXk41J2f7ekYP+jqw0FqWh2fkjj2t72fNvjx+AXhLz4AAAAAAMD/JTJt6+ML9mb9B+IoIi7yXJw9XGFckO7Oq7tPhl/OEdj2VxhXsgzZjq+pIUWDvJ2T1X4KSMWl+412/dAes6seDomUn/qZ21803LyfIlFWzM+4ez/5Dfd7ICakSd4YJYqiQDfp/IAx5H7G18xPupXUYxWfl4JozI03ZWhhbvcL7yP7pqRUNddBlCySpPG3TPNaLZIbn43O2/xnFkfdIWOir7jOjJkKRlOmJtPnou7Tki2TY835SzPoC3G3uMz5U8pUqGYihH2dd5fW2ucRXjDNscXiuuVdudS+jj8fREnXP6/Q8+QaHm97rfcUBW3lVkTWFN9RunuGFHSLSe1ZbrkqBvL5Uvw9xXEvUqkXA81SdRpXmn907ExkdCeX8+/tiZOdNt9eOCvHKN6Pi4Ss6l6J3USppq4kH2j/Y47raVrljDHZ5PdE/dmyBwAAAAAAAAAAAAAAAAAAAAAAMPcL+LscBPIBNE8AAAAASUVORK5CYII="
            alt="NetFlix Logo"
        />
    </div>
  )
}

export default Nav