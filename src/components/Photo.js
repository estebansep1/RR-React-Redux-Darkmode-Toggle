import React from 'react'
import { useSelector } from 'react-redux'

function Photo() {
    const mode = useSelector(state => state.mode)

    return (
        <div className="Photo">
            <img width="200" src={mode.photo} alt="author" />
        </div>
    )
}

export default Photo
