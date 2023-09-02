import React, { useState } from 'react';

const CommentModal = ({ isOpen, onClose, onSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(commentText);
    setCommentText('');
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <textarea
          placeholder="Напишіть ваш коментар..."
          value={commentText}
          onChange={handleCommentChange}
        />
        <button onClick={handleSubmit}>Додати коментар</button>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

export default CommentModal;
