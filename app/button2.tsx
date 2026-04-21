'use client'
import {useState} from 'react'

export default function Button2 () {
    const [likes, setLikes] = useState(0)
    function handleClick() {
        setLikes(likes + 1)
    }
    return (
        <button className="mx-auto px-2 py-4 bg-cyan-600 rounded-lg" onClick={handleClick}>{likes}</button>
    )
}