import React from 'react'
import Directory from '../../Components/Directory/Directory'

export default function Homepage(props) {

    const user = { ...props.user };

    return (
        <div style={{ width: "100%" }}>
            <Directory />
        </div>
    )
}
