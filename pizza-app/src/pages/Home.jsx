import React from 'react';
import {Categories, SortPopup, PizzaBlock} from '../components';

function Home({items}) {
    return (
        <div className="container">
          <div className="content__top">
            <Categories onClick={(item) => console.log(item)} items={[
              'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
            ]} />
            <SortPopup items={[{name: 'популярности', type: 'popular'}, {name:'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet' }]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              { 
                items && items.map((obj) =>        
                <PizzaBlock 
                    key={obj.id} 
                    name={obj.name} 
                    category={obj.category} 
                    imageUrl={obj.imageUrl} 
                    price={obj.price} 
                    rating={obj.rating} 
                    types={obj.types}
                    sizes={obj.sizes} 
                />)
              }
            
          </div>
        </div>
    )
}

export default Home
