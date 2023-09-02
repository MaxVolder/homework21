import React from 'react';
import Post from '../components/Post';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  max-width: 850px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  padding: 50px 0;
`;

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <Wrapper>
        {posts.map((e, index) => (
          <Post
            key={e}
            author={{
              name: e.author,
              photo: e.avatarUrl,
              nickname: '@Phil',
            }}
            content={e.text}
            image={e.imageUrl}
            date={e.date}
            likes={e.likes}
            comments={e.comments}
            shares={e.shares}
            id={index}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default Posts;