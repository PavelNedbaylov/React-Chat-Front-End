import React from 'react'
import './block.scss'

export default function ({children,className}) {
    return <div className={'block '+(className||'')}>{children}</div>
}
