import React from 'react'
import IMAGE from '../image/image.jpg'
import "./styles/image.css"

const Image = () => {
    return (
        <div>
            <img className="left-image" src={IMAGE} alt="" />
        </div>
    )
}

export default Image
