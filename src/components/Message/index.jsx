import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import readedSvg from 'assets/readed.svg'
import noreadedSvg from 'assets/noreaded.svg'
import { Time } from 'components'

import './message.scss'

export default function Message({ avatar, user, text, date, isMe, isReaded, attachments, isTyping, _id }) {
    return (
        <div key={_id} className={classNames('message', {
            'message-isme': isMe,
            'message-notme': !isMe,
            'message-is-typing': !isTyping
        })}>
            <div className="message__content">
                {isMe ? <img className="message__icon" src={isReaded ? readedSvg : noreadedSvg} alt="Checked icon" /> : ''}
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                {isTyping && (<div className="chat-bubble">
                    <div className="loading">
                        <div className="dot one"></div>
                        <div className="dot two"></div>
                        <div className="dot three"></div>
                    </div>
                </div>)}
                {text && (<p className="message__text">
                    {text}
                </p>)}
                {attachments && <div className="message__attached">
                    {attachments.map(v => {
                        return (
                            <div key={v._id} className={classNames('message__attached-img', { 'single': attachments.length === 1 })}>
                                <img src={v.url} alt={v.filename} />
                            </div>)
                    })}
                </div>}
                {audio && <div className="message__audio">
                    <div className="message__audio-progress" style={{width:'40%'}}></div>
                    <div className="message__audio-info"></div>
                    <div className="message__audio-btn">
                        <button></button>
                    </div>
                    <div className="message__audio-svg"></div>
                </div>
                }
            </div>
            <Time className="message__date" date={date} />
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
    isTyping: propTypes.bool,
}
