import React from 'react'
import { DialogItem } from 'components'
import { Input } from 'antd'
import './dialogs.scss'

export default function Dialogs({ items, active, onSearch, inputValue, onSelectDialog }) {
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
            {items.length?items.sort((a, b) => a.lastMessage.updatedAt > b.lastMessage.updatedAt ? 1 : -1).map(({ partner, lastMessage, _id }) => {
                return (
                    <DialogItem
                        key={_id}
                        id={_id}
                        inputValue={inputValue}
                        text={lastMessage.text}
                        online={partner.isOnline}
                        avatar={partner.avatar}
                        fullname={partner.fullname}
                        active={active}
                        date={lastMessage.createdAt}
                        readed={lastMessage.readed}
                        isReaded={lastMessage.isReaded}
                        unreaded={lastMessage.unreaded}
                        onSelect={onSelectDialog}
                    />
                )
            }):<div className='dialogs-noresults'>No contacts found</div>}
        </div>
    )
}

