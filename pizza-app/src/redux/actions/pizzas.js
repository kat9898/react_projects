import {useDispatch} from 'react-redux';



export const fetchPizzas = () => (dispatch) => {
        fetch('http://localhost:3001/pizzas').then((resp) => resp.json()).then((json) => dispatch(setPizzas(json)));
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

//action creator