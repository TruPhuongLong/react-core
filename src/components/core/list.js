import React from 'react'

const list = ({itemSource = [], renderRow = f => f}) => {
    return (
        <div>
            {itemSource.map((item, index) => renderRow(item, index))}
        </div>
    )
}

export default list