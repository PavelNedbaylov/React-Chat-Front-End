import React from 'react'
import { Message, ChatInput } from 'components'
import { Dialogs } from 'containers'
import { Icon, Button } from 'antd'

import './home.scss'
import dialogsJSON from 'assets/dialogs.json'

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
                        <Dialogs items={dialogsJSON}
                        />
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
                    <div className="chat__dialog-messages">
                        <Message
                            avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                            date="2020-01-26T13:51:50"
                            isReaded={false}
                            audio="https://notificationsounds.com/soundfiles/c361bc7b2c033a83d663b8d9fb4be56e/file-sounds-1146-quest.mp3"
                            _id='2'
                        />
                        <Message
                            avatar="https://sun6-14.userapi.com/c857616/v857616403/135faa/937vLTSteVk.jpg?ava=1"
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                            date="2019-01-26T13:51:50"
                            isMe={false}
                            attachments={[
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/50x50/?nature,water',
                                    _id: 1
                                },
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/50x50/?nature,forest',
                                    _id: 2
                                },
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/50x50/?nature,sky',
                                    _id: 3
                                }
                            ]}
                            _id='1'
                        />
                        <Message
                            avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                            date="2020-01-26T13:51:50"
                            isMe={true}
                            isReaded={false}
                            _id='2'
                        />
                        <Message
                            avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                            date="2020-01-26T13:51:50"
                            isMe={true}
                            isReaded={false}
                            _id='6'
                        />
                        <Message
                            avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                            date="2020-01-26T13:51:50"
                            isMe={true}
                            isReaded={false}
                            _id='7'
                        />
                        <Message
                            avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                            date="2020-01-26T13:51:50"
                            isMe={true}
                            isReaded={false}
                            _id='8'
                        />
                        <Message
                            avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                            isReaded={false}
                            isTyping={true}
                            _id='3'
                        />
                        <Message
                            avatar="https://sun6-14.userapi.com/c857616/v857616403/135faa/937vLTSteVk.jpg?ava=1"
                            date="2019-01-26T13:51:50"
                            isMe={false}
                            attachments={[
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/150x150/?nature,water',
                                    _id: 1
                                }
                            ]}
                            _id='4'
                        />
                    </div>
                    <ChatInput/>
                </div>
            </div>
        </section>
    )
}
