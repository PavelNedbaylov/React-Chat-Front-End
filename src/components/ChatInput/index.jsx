import React from 'react'
import { Icon, Input } from 'antd'

import './chatInput.scss'

export default function ChatInput() {
    return (
        <div className="chat__input">
            <Icon className='chat__input-smile' type="smile" />
            <Input
                placeholder='Message...'
            />
            <div className="chat__input-actions">
                <Icon type="camera" />
                <Icon type="audio" />
                <Icon type="check-circle" />
            </div>
        </div>
    )
}
