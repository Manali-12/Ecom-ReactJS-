import React from 'react'
import "../Footer/Footer.scss"

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="wrap">
                <p> © {year} Fashion</p>
            </div>
        </div>
    )
}
