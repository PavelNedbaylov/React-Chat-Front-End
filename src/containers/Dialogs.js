import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import {dialogsActions} from 'redux/actions'
import {Dialogs as BaseDialogs} from 'components'

function Dialogs({fetchDialogs, items=[]}){
    const [inputValue, setValue] = useState('')
    const [filtered, setFiltered] = useState([...items])

    console.log(items)

    function onChangeInput(e){
        const value = e.target.value
        setFiltered(items.filter(v=>v.user.fullname.toLowerCase().includes(value.toLowerCase())))
        setValue(value)
    }

    useEffect(()=>{
        if(!items.length){
            fetchDialogs()
        }
        else setFiltered(items)
    }, [items])

    return (
        <BaseDialogs
            items={filtered}
            onSearch={onChangeInput}
            inputValue={inputValue}
        />
    )
}

export default connect(({dialogs})=>dialogs, dialogsActions)(Dialogs)