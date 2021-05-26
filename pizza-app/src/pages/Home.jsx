import React from 'react';
import {Categories, SortPopup, PizzaBlock} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {setCategory} from '../redux/actions/filters';

const categoryNames = [
  'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
];


function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas, filters}) => pizzas.items);

    const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
          <div className="content__top">
            <Categories onClickItem={onSelectCategory} items={categoryNames} />
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
