import React from 'react'
import isToday from 'date-fns/isToday'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import classNames from 'classnames'

export default function Time({ date, className }) {
    return (
        date ? (
            <time className={classNames('date', className)}>
                {format(parseISO(date),isToday(parseISO(date))?'HH:mm':'MM.dd.yyyy')}
            </time>) : null
    )
}
