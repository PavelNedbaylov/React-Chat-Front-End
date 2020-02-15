import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { messagesActions } from 'redux/actions'
import { Messages as BaseMessages } from 'components'

function Dialog({ isLoading, currenDialogId, fetchMessages, items = [] }) {
    const messagesRef = useRef(null);
    useEffect(() => {
        if (currenDialogId) {
            fetchMessages(currenDialogId)
        }
    }, [currenDialogId])

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTo(0, 999999)
        }
    }, [items])

    return <BaseMessages blockref={messagesRef} isLoading={isLoading} items={items} />
}

export default connect(
    ({ dialogs, messages }) => ({
        currenDialogId: dialogs.currentDialog,
        items: messages.items,
        isLoading: messages.isLoading
    }),
    messagesActions
)(Dialog)