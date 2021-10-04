import React from 'react';
import "./image.scss";

interface Props {
    alt?: string,
    height?: number,
    src: string,
    width?: number,
}

const Image = ({ alt, height = 150, src, width = 150}:Props) => {
    return (
        <img className="image" alt={alt} height={`${height}px`} src={src} width={`${width}px`} />
    )
}

export default Image
