import React from 'react'
import {Button} from 'antd'
import './button.scss'

export default function (props) {
    return (
        <Button {...props} className={'button '+(props.className||'')}/>
    )
}
