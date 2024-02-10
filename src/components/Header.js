import React from "react";
import trollface from "../images/trollFace.png"

export default function Header() {
    return (
        <header>
            <img src={trollface} alt="troll-face" />
            <h4>Meme Generator</h4>
        </header>
    )
}