import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { socket } from 'core'

import { messagesActions } from 'redux/actions'
import { Messages as BaseMessages } from 'components'

function Dialog({ isLoading, currenDialogId, addMessage, user, fetchMessages, items = [] }) {

    // eslint-disable-next-line
    const messagesRef = useRef(null);
    useEffect(() => {
        if (currenDialogId) {
            fetchMessages(currenDialogId)
            socket.removeListener('SERVER:NEW_MESSAGE')
            socket.on('SERVER:NEW_MESSAGE', (data)=>{
                addMessage(data)
            })
        }
    }, [currenDialogId])

    // eslint-disable-next-line
    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTo(0, 999999)
        }
    }, [items])

    return <BaseMessages blockref={messagesRef} user={user} isLoading={isLoading} items={items} />
}

export default connect(
    ({ dialogs, messages, user }) => ({
        currenDialogId: dialogs.currentDialogId,
        items: messages.items,
        isLoading: messages.isLoading,
        user: user.data
    }),
    messagesActions
)(Dialog)