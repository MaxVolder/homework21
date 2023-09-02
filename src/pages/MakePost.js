import React from 'react';
import { styled } from 'styled-components';
import Dropdown from '../components/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/postsSlice';
import SubmitButton from '../components/SubmitButton';

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  background-color: #107c10; /* Xbox green background */
  margin: 0 auto;
  margin-top: 200px;
  border-radius: 15px;
  transition: all ease 0.5s;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  transform: scale(0);
  color: #fff;
  &.active {
    transform: scale(1);
  }
`;

const Flex = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  font-weight: 600;
  textarea {
    border: 1px solid #107c10; /* Xbox green border */
    resize: none;
    outline: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
  }
`;

const Menu = styled.ul`
  margin: 1px 0 0;
  padding: 0;
  border: 1px solid #107c10; /* Xbox green border */
  max-height: 100px;
  overflow-y: auto;
`;

const MakePost = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const authors = ['Phil Spencer', 'Jim Ryan', 'Tod Govard'];
  const authorsAvatars = [
    'data:image/jpeg;base64,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://encrypted-tbn1.gstgZyNarictwyHXfMOOGUkbcksYmbAQbfKEtHhn1/qNA84xUy+/SehijhR5tSnnJH12zkixRR//Z',
    'https://pbs.twimg.com/profile_images/1305465310305189889/z74ND-Ch_400x400.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/bf/ToddHoward2010sm_%28cropped%29.jpg',
  ];
  const [selectedAuthor, setSelectedAuthor] = React.useState();
  const [text, setText] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const windowRef = React.useRef();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      windowRef.current.classList.add('active');
    });
    return () => {
      windowRef.current.classList.remove('active');
    };
  }, []);

  const submitAddPost = () => {
    let date = new Date();
    dispatch(
      addPost({
        id: posts.length + 1,
        avatarUrl: authorsAvatars[authors.indexOf(selectedAuthor)],
        text: text,
        imageUrl: imageUrl,
        author: selectedAuthor,
        likes: 0,
        comments: 0,
        shares: 0,
        date: `${date.getUTCDate()} ${monthNames[date.getMonth()]}`,
      }),
    );
  };

  return (
    <>
      <Wrapper ref={windowRef}>
        <h2>Новий пост</h2>
        <Flex>
          Текст
          <textarea onChange={(e) => setText(e.target.value)}></textarea>
        </Flex>
        <Flex>
          Картинка url
          <textarea onChange={(e) => setImageUrl(e.target.value)}></textarea>
        </Flex>
        <Flex>
          Автор
          <Dropdown
            selectedAuthor={selectedAuthor}
            setSelectedAuthor={setSelectedAuthor}
            authors={authors}
          />
        </Flex>
        <SubmitButton onClick={submitAddPost}>Опублікувати</SubmitButton>
      </Wrapper>
    </>
  );
};

export default MakePost;