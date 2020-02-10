import React from 'react'

export default function tagsToLetters(str,exp) {
    str = str.split(new RegExp(`(${exp})`, 'gi'))
    for (let i = 1; i < str.length; i += 2) {
        str[i] = <span key={i}>{str[i]}</span>;
    }
    return str
}