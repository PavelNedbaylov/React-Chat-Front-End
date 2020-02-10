import React from 'react'
import { DialogItem } from 'components'
import { Input } from 'antd'
import './dialogs.scss'

export default function Dialogs({ items, onSearch, inputValue }) {
    return (
        <div className="dialogs">
            <div className="dialogs-search">
                <Input.Search
                    size='large'
                    placeholder='Contacts search'
                    value={inputValue}
                    onChange={onSearch}
                />
            </div>
            {items.length?items.sort((a, b) => a.message.date > b.message.date ? 1 : -1).map(({ active, user, message, _id }) => {
                return (
                    <DialogItem
                        key={_id}
                        id={_id}
                        inputValue={inputValue}
                        text={message.text}
                        online={user.online}
                        avatar={user.avatar}
                        fullname={user.fullname}
                        active={active}
                        date={message.date}
                        readed={message.readed}
                        isReaded={message.isReaded}
                        unreaded={message.unreaded}
                    />
                )
            }):<div className='dialogs-noresults'>No contacts found</div>}
        </div>
    )
}

