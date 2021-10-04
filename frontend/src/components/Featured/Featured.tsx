import React from 'react';
import "./featured.scss";
import Image from '../Image';

const image = "https://t3.ftcdn.net/jpg/04/59/91/22/240_F_459912268_mI9i0wTdbD4wbpVUztYeFoervGNyD16c.jpg"
const Featured:React.FC = () => {
    return (
        <div>
            <Image src={image} />
            <div className="info">
                <Image src="" />
                <span className="desc"></span>
                <div className="buttons"></div>
            </div>
        </div>
    )
}

export default Featured
