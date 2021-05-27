import React, {useEffect} from 'react';
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';

const categoryNames = [
  'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
];


function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);


    useEffect(() => {

      dispatch(fetchPizzas(sortBy, category));
      // axios.get('http://localhost:3000/db.json').then(({data}) => 
      //   setPizzas(data.pizzas)
      // );
    }, [sortBy, category]);

    const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
      dispatch(setSortBy(type));
    }, []);

    return (
        <div className="container">
          <div className="content__top">
            <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
            <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy.type} items={[{name: 'популярности', type: 'popular', order: 'desc'}, {name:'цене', type: 'price', order: 'desc'}, {name: 'алфавиту', type: 'name', order: 'asc' }]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              { 
                isLoaded 
                ? items.map((obj) =>        
                <PizzaBlock 
                    key={obj.id} 
                    name={obj.name} 
                    category={obj.category} 
                    imageUrl={obj.imageUrl} 
                    price={obj.price} 
                    rating={obj.rating} 
                    types={obj.types}
                    sizes={obj.sizes} 
                    isLoading={false}
                />) 
                : Array(12).fill(0).map(( _, index) => <PizzaLoadingBlock key={index} />)
              }

          </div>
        </div>
    )
}

export default Home
