import React, {useState} from 'react'
import { Icon, Input } from 'antd'

import {UploadPhotos, Emoji} from 'components'
import './chatInput.scss'

export default function ChatInput() {
    return (
        <div className="chat__input">
            <Emoji/>
            <Input placeholder='Message...' />
            <div className="chat__input-actions">
                <UploadPhotos />
                <Icon type="audio" />
                <Icon type="check-circle" />
            </div>
        </div>
    )
}
