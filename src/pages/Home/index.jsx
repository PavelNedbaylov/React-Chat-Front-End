import React from 'react'
import { ChatInput } from 'components'
import { Dialogs, Messages } from 'containers'
import { Icon, Button } from 'antd'

import './home.scss'

export default function Home() {    
    return (
        <section className='home'>
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <Icon type='team' />
                            <span>Dialogs list</span>
                        </div>
                        <Icon type='form'/>
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs/>
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Name</b>
                            <div className="chat__dialog-header-status">
                                <span className="status status--online">online</span>
                            </div>
                        </div>
                        <Button icon='ellipsis'/>
                    </div>
                    <Messages/>
                    <ChatInput/>
                </div>
            </div>
        </section>
    )
}
