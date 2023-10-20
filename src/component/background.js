import React from "react"

function Background({ ImgURL }) {
    const back_style = {
        backgroundImage: `url(${ImgURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    };
    return (
        <div style={back_style}></div>
    )
}

export default Background;