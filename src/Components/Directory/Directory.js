import React from 'react';
import "../Directory/Directory.scss"
import Man from "../../images/man.png";
import Woman from "../../images/woman.png"
import poster from "../../images/poster3.png"



export default function Directory() {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="shop_img"
                    style={
                        {
                            backgroundImage: `url(${poster})`
                        }
                    }>
                    <div className="heading_div">
                        <div className="heading_wrap">
                            <div className="heading">
                                Enjoy shopping with the
                                fashion experts!
                            </div>
                            <div className="buttons">
                                <button className="shop_button">Shop for Woman</button>
                                <button className="shop_button">Shop for Man</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
