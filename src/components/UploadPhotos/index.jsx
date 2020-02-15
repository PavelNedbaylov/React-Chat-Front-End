
import React from 'react'
import { Upload, Icon, message } from 'antd';

import './uploadPhotos.scss'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isLt2M;
}

export default class UploadPhotos extends React.Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        return (
            <Upload
                listType="picture"
                accept=".jpeg,.jpg,.png"
                className="upload-photos"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
                multiple={true}
            >
            <Icon type='camera' />
            </Upload>
        );
    }
}