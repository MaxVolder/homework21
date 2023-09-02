import React, { useState } from 'react';
import styles from './Post.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addComment,
  addLike,
  addShare,
  removeComment,
  removeLike,
  removeShare,
} from '../../store/postsSlice';
import { styled } from 'styled-components';
import CommentModal from './CommentModal';



const Card = styled.div`
  width: 90%;
  max-height: 650px;
  background-color: #107c10; /* Зелений колір Xbox */
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 24px; /* Змінена тінь */
  color: #fff;
  padding: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  opacity: 0.5;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
  }
`;

const Post = (props) => {
  const { author, content, image, date, comments, shares, likes, id } = props;
  const dispatch = useDispatch();
  const [liked, setLiked] = React.useState(false);
  const [shared, setShared] = React.useState(false);
  const [commented, setCommented] = React.useState(false);
  const [commentModalOpen, setCommentModalOpen] = React.useState(false);
  const [commentText, setCommentText] = React.useState('');

  const openCommentModal = () => {
    setCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      dispatch(
        addComment({
          id: id,
          text: commentText,
        })
      );
      setCommentText('');
    }
    closeCommentModal();
  };

  const handleLikes = () => {
    if (!liked) {
      dispatch(
        addLike({
          id: id,
        }),
      );
    } else if (liked) {
      dispatch(
        removeLike({
          id: id,
        }),
      );
    } else {
      return;
    }
    setLiked(!liked);
  };

  

  const handleShares = () => {
    if (!shared) {
      dispatch(
        addShare({
          id: id,
        }),
      );
    } else if (shared) {
      dispatch(
        removeShare({
          id: id,
        }),
      );
    } else {
      return;
    }
    setShared(!shared);
  };


  return (
    <Card>
      <div className={styles.info}>
        <img className={styles.avatar} src={author.photo} />
        <h2 className={styles.fullName}>{author.name}</h2>
        <svg
          width="35px"
          fill="#FFF"
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title />
          <path d="M22.41,10.59,20.36,8.54V5.63a2,2,0,0,0-2-2H15.46l-2.05-2a2,2,0,0,0-2.82,0L8.54,3.64H5.63a2,2,0,0,0-2,2V8.54l-2,2.05A2,2,0,0,0,1,12a2,2,0,0,0,.58,1.41l2.06,2.05v2.91a2,2,0,0,0,2,2H8.54l2.05,2.05A2,2,0,0,0,12,23a2,2,0,0,0,1.41-.58l2.05-2.06h2.91a2,2,0,0,0,2-2V15.46l2.05-2.05a2,2,0,0,0,0-2.82Zm-4.05,4.05v3.72H14.64L12,21,9.36,18.36H5.64V14.64L3,12,5.64,9.36V5.64H9.36L12,3l2.64,2.64h3.72V9.36L21,12Z" />
          <polygon points="11 12.73 8.71 10.44 7.29 11.85 11 15.56 16.71 9.85 15.29 8.44 11 12.73" />
        </svg>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.contentText}>{content}</p>
      <div className={styles.blockImg}>
        <img className={styles.contentImage} src={image} alt="contentImg" />
      </div>
      <div className={styles.icons}>
      <Button onClick={openCommentModal}>
          <svg width="25px" fill="#FFF" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z" />
          </svg>
          {comments}
        </Button>
        <Button onClick={handleShares} className={shared ? 'active' : ''}>
          <svg
            className="feather feather-share"
            fill="none"
            height="25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
          </svg>
          {shares}
        </Button>
        <Button onClick={handleLikes} className={liked ? 'active' : ''}>
          <svg width="25px" fill="#FFF" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <title />
            <g data-name="Layer 54" id="Layer_54">
              <path
                className="cls-1"
                d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
              />
            </g>
          </svg>
          {likes}
        </Button>
        <Button>
          <svg width="25px" fill="#FFF" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <title />
            <g>
              <path d="M90,54a5.9966,5.9966,0,0,0-6,6V78H12V60A6,6,0,0,0,0,60V84a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V60A5.9966,5.9966,0,0,0,90,54Z" />
              <path d="M43.7578,64.2422a5.9979,5.9979,0,0,0,8.4844,0l18-18a5.9994,5.9994,0,0,0-8.4844-8.4844L54,45.5156V12a6,6,0,0,0-12,0V45.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844Z" />
            </g>
          </svg>
        </Button>
      </div>
       {/* Модальне вікно для коментарів */}
       {commentModalOpen && (
        <div className={styles.commentModal}>
          <textarea
            placeholder="Напишіть ваш коментар..."
            value={commentText}
            onChange={handleCommentChange}
          />
          <div className={styles.commentModalButtons}>
            <button onClick={handleAddComment}>Додати коментар</button>
            <button onClick={closeCommentModal}>Закрити</button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;