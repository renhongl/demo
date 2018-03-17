

import React, { Component } from 'react';
import { Icon } from 'antd';
import { urlApplication } from '../../share/config/globalConfig';
import './style.less';

export default class Store extends Component{
    constructor(props) {
        super(props);
        this.showDialog = this.showDialog.bind(this);
    }

    showDialog(e) {
        let name = e.currentTarget.getAttribute('dialog');
        this.props.showDialog(name);
        this.props.toggleStore();
    }

    render() {
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},0.8)`,
            color: this.props.config.fontColor,
        }
        const appList = urlApplication.map( (v, k) => (
            <span key={k} dialog={v.id} className='iconSpan' onClick={this.showDialog}>
                <Icon type={v.class}/>
            </span>
        ))
        return (
            <section className={this.props.show ? 'store show' : 'store hide'} style={style}>
                {appList}
            </section>
        )
    }
}