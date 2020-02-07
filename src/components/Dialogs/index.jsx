import React from 'react'
import {DialogItem} from 'components'
import './dialogs.scss'

export default function Dialogs({ items }) {
    return (
        <div className="dialogs">
            {items.sort((a,b)=>a.message.date>b.message.date?1:-1).map(({ user, message, _id }) => {
                return (
                    <DialogItem
                        key={_id}
                        text={message.text}
                        online={user.online}
                        avatar={user.avatar}
                        fullname={user.fullname}
                        date={message.date}
                        readed={message.readed}
                        isReaded={message.isReaded}
                        unreaded={message.unreaded}
                    />
                )
            })}
        </div>
    )
}

