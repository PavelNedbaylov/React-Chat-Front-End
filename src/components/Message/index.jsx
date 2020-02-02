import React from 'react'
import propTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames'
import readedSvg from 'assets/readed.svg'
import noreadedSvg from 'assets/noreaded.svg'

import './message.scss'

export default function Message({ avatar, user, text, date, isMe, isReaded, attachments }) {
    return (
        <div className={classNames('message', { 'message-isme': isMe, 'message-notme': !isMe })}>
            <div className="message__content">
                {isMe ? <img className="message__icon" src={isReaded ? readedSvg : noreadedSvg} alt="Checked icon" /> : ''}
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <p className="message__text">{text}</p>
                <div className="message__attached">
                    {attachments&&attachments.map(v => <div className="message__attached-img"><img src={v.url} alt={v.filename} /></div>)}
                </div>
            </div>
            <time className="message__date">{formatDistanceToNow(new Date(date), { locale: ruLocale })}</time>
        </div>
    )
}
Message.defaultProps = {
    user: {},
    isReaded: true,
}
Message.propType = {
    avatar: propTypes.string,
    text: propTypes.string,
    date: propTypes.string,
    user: propTypes.object,
}
