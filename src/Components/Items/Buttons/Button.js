import React from 'react';
import "../Buttons/Button.scss"

export default function Button({ children }, ...otherProps) {
    return (
        <div className="wrap" {...otherProps}>
            <button className="button">{children}</button>
        </div>
    )
}
