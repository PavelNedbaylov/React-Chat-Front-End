import React from 'react'
import { Spin, Icon, Empty } from 'antd';

import { Message } from 'components'
import './messages.scss'

export default function Messages({ blockref, isLoading, items }) {
    return (
        <div className="chat__dialog-messages" ref={blockref}>
            {
                isLoading ? (
                    <Spin indicator={<Icon type="loading" style={{ fontSize: 34 }} spin />} />
                )
                : !items.length ? (
                    <Empty className='chat__dialog-messages-empty' description={'Open dialog'} />
                ) : (
                    items.map(item => (
                        <Message key={item._id} {...item} />
                    ))
                )
            }
        </div>
    )
}
