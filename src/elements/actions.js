// actions.js
export const likePost = (postId) => {
    return {
      type: 'LIKE_POST',
      payload: { postId }
    };
  };
  
  export const unlikePost = (postId) => {
    return {
      type: 'UNLIKE_POST',
      payload: { postId }
    };
  };
  
  export const sharePost = (postId) => {
    return {
      type: 'SHARE_POST',
      payload: { postId }
    };
  };
  
  export const addComment = (postId, comment) => {
    return {
      type: 'ADD_COMMENT',
      payload: { postId, comment }
    };
  };