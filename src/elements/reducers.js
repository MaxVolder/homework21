import { combineReducers } from 'redux';
import postsReducer from './postReducer'; // Підключаємо редюсер для постів

const rootReducer = combineReducers({
  posts: postsReducer, // Додавання редюсера для постів до кореневого редюсера
});

export default rootReducer;
