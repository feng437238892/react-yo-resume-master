import React, { Component } from 'react';
import { EnvView } from '$router';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <header className="yo-header">
                <h2 className="title">{this.props.title}</h2>
            </header>
        )
    }
}

Header.defaultProps = {
    title: '首页',
    left: {
        title: '&#xf07d;',
        onTap: function () {
            yoHistory.go(-1)
        }
    }
}

export default Header;
