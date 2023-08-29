import { createStore } from 'redux';

// Початковий стан
const initialState = {
  posts: [
    {
      id: 1,
      author: 'John Doe',
      image: 'https://i.pinimg.com/236x/00/cd/3d/00cd3d00c72b745ed5c8384f29cd91f6.jpg',
      likes: 0,
      comments: 0,
      shares: 0,
    },
    // Додайте інші публікації тут, якщо потрібно
  ],
};

// Типи дій
const ADD_POST = 'ADD_POST';
const LIKE_POST = 'LIKE_POST';
const UNLIKE_POST = 'UNLIKE_POST';
const COMMENT_POST = 'COMMENT_POST';

// Редуктор
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // ...
    default:
      return state;
  }
};

// Створення Redux Store
const store = createStore(rootReducer);

export default store;
