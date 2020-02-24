import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { dialogsActions } from 'redux/actions'
import { Dialogs as BaseDialogs } from 'components'

function Dialogs({ fetchDialogs, setCurrentDialogId, items = [] }) {

    const [inputValue, setValue] = useState('')
    const [filtered, setFiltered] = useState([...items])
    const [active, setActive] = useState(null)

    function onChangeInput(e) {
        const value = e.target.value
        setFiltered(items.filter(v => v.user.fullname.toLowerCase().includes(value.toLowerCase())))
        setValue(value)
    }
    function onSelectDialog(id) {
        setCurrentDialogId(id)
        setActive(id)
    }
// eslint-disable-next-line
    useEffect(() => {
        if (!items.length) {
            fetchDialogs()
        }
        else setFiltered(items)
    }, [items]) 

    return (
        <BaseDialogs
            items={filtered}
            active={active}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={onSelectDialog}
        />
    )
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs)