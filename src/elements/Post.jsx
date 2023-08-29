import React from 'react';

const Post = ({ post, dispatch }) => {
  const { id, author, image, likes, comments, shares } = post;

  const handleLike = () => {
    dispatch({ type: 'LIKE_POST', payload: id });
  };

  const handleUnlike = () => {
    dispatch({ type: 'UNLIKE_POST', payload: id });
  };

  const handleComment = () => {
    dispatch({ type: 'COMMENT_POST', payload: id });
  };

  const handleShare = () => {
    dispatch({ type: 'SHARE_POST', payload: id });
  };

  return (
    <div className="post">
      <img src={image} alt="Post" />
      <div>{author}</div>
      <div>Likes: {likes}</div>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleUnlike}>Unlike</button>
      <div>Comments: {comments}</div>
      <button onClick={handleComment}>Comment</button>
      <div>Shares: {shares}</div>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default Post;
