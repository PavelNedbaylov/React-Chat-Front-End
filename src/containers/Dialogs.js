import React, { useState } from 'react'

import {Dialogs as BaseDialogs} from 'components'

export default function Dialogs({items}){
    const [inputValue, setValue] = useState('')
    const [filtered, setFiltered] = useState([...items])

    function onChangeInput(e){
        const value = e.target.value
        setFiltered(items.filter(v=>v.user.fullname.toLowerCase().includes(value.toLowerCase())))
        setValue(value)
    }
    return (
        <BaseDialogs
            items={filtered}
            onSearch={onChangeInput}
            inputValue={inputValue}
        />
    )
}