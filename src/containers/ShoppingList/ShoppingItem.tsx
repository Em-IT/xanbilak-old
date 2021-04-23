import React, { useState } from 'react'
import { BuyableItem } from '../../types/BuyableItem'
import './ShoppingItem.scss'
import moment from 'moment-jalaali'

interface inputProps {
    item:BuyableItem,
    onClick: any
}

const ShoppingItem = ({item, onClick}: inputProps) => {
    const {id, title, isBought, description, createDate} = item;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className='shopping-item'>
            <div className='main-info' onClick={e => setIsOpen(!isOpen)}>
                <input type='checkbox' onClick={e => onClick(id)} checked={isBought} />
                {title}
            </div>
            <div className={'extra-info' + (isOpen ? '' : ' is-collapse')}>
                <div>{description}</div>
                <div>{moment(createDate).format('jYYYY/jM/jD')}</div>
                <div>{moment(createDate).format('HH:mm:ss')}</div>
            </div>
        </li>
    );
}

export default ShoppingItem
