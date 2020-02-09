import React from 'react'

import colorFromId from 'utils/colorFromId'
import './avatar.scss'

export default function Avatar({avatar,id,fullname}){
    const color = colorFromId(id)
    return (
        avatar ? <img src={avatar} alt={fullname} /> : (
        <div className="avatar" style={{background:`linear-gradient(to bottom right, rgba(${color}, 1), rgba(${color}, .5))`}}>
            <span>{fullname[0]}</span>
        </div>)
    )
} 