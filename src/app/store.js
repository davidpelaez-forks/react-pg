import {createStore} from 'redux';
import reducer from './redux/reducer'
window.reducer = reducer;
export default createStore(reducer);
