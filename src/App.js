import React from 'react';
import { Provider } from 'react-redux';
import store from './elements/store'; // Підключаємо створений Redux store
import PostPage from './elements/PostPage'; // Підключаємо компонент PostPage

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostPage />
      </div>
    </Provider>
  );
}

export default App;
