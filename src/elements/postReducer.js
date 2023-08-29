const initialState = [
    {
      id: 1,
      author: 'John Doe',
      image: 'https://i.pinimg.com/236x/00/cd/3d/00cd3d00c72b745ed5c8384f29cd91f6.jpg',
      likes: 0,
      comments: 0,
      shares: 0,
    },
    // Додайте інші пости за аналогією
  ];
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LIKE_POST':
        return state.map(post =>
          post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
        );
      case 'UNLIKE_POST':
        return state.map(post =>
          post.id === action.payload ? { ...post, likes: post.likes - 1 } : post
        );
      case 'COMMENT_POST':
        return state.map(post =>
          post.id === action.payload ? { ...post, comments: post.comments + 1 } : post
        );
      case 'SHARE_POST':
        return state.map(post =>
          post.id === action.payload ? { ...post, shares: post.shares + 1 } : post
        );
      default:
        return state;
    }
  };
  
  export default postsReducer;
  