import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Meme Generator</h1>
        </header>
    )
}


const headerStyle ={
    padding: '1em',
    background: "#333",
    color: "#fff",
    textAlign: "center",
    fontFamily: "'montserrat', sans-serif" 
}