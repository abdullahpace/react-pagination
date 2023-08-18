import React from 'react';

const Posts = ({ posts }) => {
  return (
    <ul className='list-group mb-4'>
      {posts?.map((post, index) => (
        <li key={post.id} className='list-group-item text-start '>
          <span className='bg-success text-light rounded-circle p-1 me-2'>
            {' '}
            {index + 1}
          </span>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
