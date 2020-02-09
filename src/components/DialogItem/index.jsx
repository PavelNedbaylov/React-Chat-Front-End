import React from 'react'
import readedSvg from 'assets/readed.svg'
import noreadedSvg from 'assets/noreaded.svg'

import { Time } from 'components'
import { Avatar } from 'components'
import './dialogItem.scss'

export default function DialogItem({ id, text, online, avatar, fullname, date, readed, isReaded, unreaded}) {
    return (
        <div className="dialog__item">
            {online && <div className="dialog__item-avatar-online"></div>}
            <div className="dialog__item-avatar">
                <Avatar avatar={avatar} id={id} fullname={fullname}/>
            </div>
            <div className="dialog__item-content">
                <div className="dialog__item-content-top">
                    <span className="dialog__item-name"><b>{fullname}</b></span>
                    <Time date={date} />
                </div>
                <div className="dialog__item-content-bottom">
                    <p className="dialog__item-message">{text}</p>
                    {readed || <span className="dialog__item-number">{unreaded < 10 ? unreaded : '+9'}</span>}
                    {readed ? <img className="message__icon" src={isReaded ? readedSvg : noreadedSvg} alt="Checked icon" /> : ''}
                </div>
            </div>
        </div>
    )
}

