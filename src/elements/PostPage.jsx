// PostPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post'; // Підключаємо компонент Post

const PostPageg = () => {
  const posts = useSelector(state => state.posts); // Отримуємо пости зі стору
  const dispatch = useDispatch(); // Отримуємо функцію dispatch для відправки дій

  return (
    <div className="PostPage">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default PostPage;

