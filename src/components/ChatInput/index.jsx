import React from 'react'
import { useState } from 'react'
import { Icon, Input } from 'antd'

import { UploadPhotos, Emoji } from 'components'
import './chatInput.scss'

export default function ChatInput(props) {
    const { onSendMessage, dialogId } = props

    const [value, setValue] = useState('')

    function hendleSendMessage(e){
        if(e.keyCode===13){
            onSendMessage({text:value,dialogId})
            setValue('')
        }    
    }

    return (
        <div className="chat__input">
            <Emoji />
            <Input
                value={value}
                onChange={e=>{setValue(e.target.value)}}
                onKeyUp={e => hendleSendMessage(e)}
                placeholder='Message...'
            />
            <div className="chat__input-actions">
                <UploadPhotos />
                <Icon type="audio" />
                <Icon type="check-circle" />
            </div>
        </div>
    )
}
