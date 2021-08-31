import React from 'react';
import "../Directory/Directory.scss"
import poster from "../../images/poster6.png"
import sposter from "../../images/sideposter5.png";
import Button from '../Items/Buttons/Button';


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
                </div>

                <div className="heading_div" style={
                    {
                        backgroundImage: `url(${sposter})`
                    }
                }>
                    <div className="heading_wrap">
                        <div className="heading">
                            Enjoy shopping with the
                            fashion experts!
                        </div>
                        <div className="buttons">
                            <Button>Explore</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
