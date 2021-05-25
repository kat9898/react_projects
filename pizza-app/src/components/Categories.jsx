import {React, useState} from 'react';

const Categories = ({items, onClick}) => {
    const [activeItem, setActiveItem] = useState(null);
    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    return (
        <div className="categories">
            <ul>
                <li 
                onClick={() => onSelectItem(null)}
                className={activeItem === null ? 'active' : ''}>
                    Все
                </li>
                {items && items.map((item, index) => {
                    return (
                    <li 
                    className={activeItem === index ? 'active' : ''}
                    onClick={() => onSelectItem(index)} 
                    key={`${item}_${index}`}>
                        {item}
                    </li>
                    )
                })}
                
            </ul>
        </div>
    );
}

export default Categories;