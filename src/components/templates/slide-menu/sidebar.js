import React from 'react'

import classes from './sidebar.module.scss'

const _categories = [
    {
        id: 'agriculture',
        children: ['rice', 'nudle', 'coconuts', 'water lement']
    },
    {
        id: 'car',
        children: ['honda', 'toyota', 'kamry', 'mesedes']
    },
    {
        id: 'Đồ gia dụng',
        children: ['pan', 'nồi', 'xong', 'bow']
    }
]

export default class extends React.Component {

    static defaultProps = {
        categories: _categories
    }

    state = {
        itemActivePath: null
    }

    _onClick = (path) => {
        this.setState({ itemActivePath: path })
    }

    render() {
        const { categories } = this.props
        const { itemActivePath } = this.state
        return (
            <nav className={classes.nav} id="sidebar">
                <header>slide menu</header>
                <ul>
                    {
                        categories.map(({ id, children }, idx) => (
                            <React.Fragment>
                                <hr />
                                <li key={idx}>
                                    <header>{id}</header>
                                    <ul>
                                        {
                                            children.map((item, idx) => {
                                                const path = `${id}/${item}`
                                                return (
                                                    < li key={idx} >
                                                        <a href="#"
                                                            onClick={
                                                                () => this._onClick(path)
                                                            }
                                                            className={itemActivePath === path && classes.itemActive}
                                                        >{item}</a>
                                                    </li>
                                                )

                                            })
                                        }
                                    </ul>
                                </li>
                            </React.Fragment>
                        ))
                    }
                </ul>
            </nav>
        )
    }
}