import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { Icon } from 'antd'

import './emoji.scss'

export default function Emoji(){
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [displayEmoji, setDisplayEmoji] = useState(false)

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    return (
        <div className="chat__input-emoji">
            <Icon onClick={()=>setDisplayEmoji(!displayEmoji)} className='chat__input-smile' type={displayEmoji?"close":"smile"} />
            {displayEmoji && <Picker onEmojiClick={onEmojiClick} />}
        </div>
    );
};