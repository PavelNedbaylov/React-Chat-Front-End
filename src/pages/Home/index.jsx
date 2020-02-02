import React from 'react'
import {Message} from 'components'

import './home.scss'

export default function Home() {
    return (
        <section className='home'>
            <Message
                avatar="https://sun6-14.userapi.com/c857616/v857616403/135faa/937vLTSteVk.jpg?ava=1"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                date="2019-01-26T13:51:50"
                isMe={false}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?nature,water'
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?nature,forest'
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?nature,sky'
                    }
                ]}
            />
            <Message
                avatar="https://sun9-7.userapi.com/c830608/v830608079/4f8e2/edHZsB_huUE.jpg?ava=1"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, earum."
                date="2020-01-26T13:51:50"
                isMe={true}
                isReaded={false}
            />
        </section>
            )
        }
