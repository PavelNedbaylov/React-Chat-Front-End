import React from 'react'
import { Block } from 'components'
import { Result } from 'antd';

export default function Checkinfo() {
    return (
        <div>
            <Block>
                <Result
                    status="success"
                    title="Готово"
                    subTitle="Регистрация прошла успешно. Ссылка на продверждение аккаунта, отправлена на ваш E-Mail."
                />
            </Block>
        </div>
    )
}

