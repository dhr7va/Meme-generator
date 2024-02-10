import React, { useState, useEffect } from "react";


export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/16iyn1.jpg"
    })

    const [allMeme, setAllMeme] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }
        getMemes()
    })

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)

        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="input">
                    <div className="top">
                        <label>Top text<br />
                            <input
                                type="text"
                                placeholder="Shut Up"
                                className="form-input"
                                name="topText"
                                value={meme.topText}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="bottom">
                        <label>Bottom text <br />
                            <input type="text"
                                placeholder="And take my money"
                                className="form-input"
                                name="bottomText"
                                value={meme.bottomText}
                                onChange={handleChange} />
                        </label>
                    </div>
                </div>
                <button className="image-meme" onClick={getMemeImage}
                >Get a new image meme 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="meme" className="meme-img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}