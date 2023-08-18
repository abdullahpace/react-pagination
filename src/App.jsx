import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination';
import ReactPagination from './components/ReactPagination';
import Section from './components/Section';
function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPge] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const getPosts = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    setPosts(response.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPge(pageNumber);
  return (
    <>
      <Section />
      {/* <ReactPagination /> */}
      {/* <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={perPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
    </>
  );
}

export default App;
