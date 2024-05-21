import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Components/Navbar/Navbar';
import Channel from './Components/Channel/Channel';
import Result from './Components/Result/Result';
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Example posts data
    const examplePosts = [
      { id: 1, title: 'Post 1', content: 'Content 1', category: 'news' },
      { id: 2, title: 'Post 2', content: 'Content 2', category: 'sports' },
      { id: 3, title: 'Post 3', content: 'Content 3', category: 'tech' },
    ];

    dispatch({ type: 'SET_POSTS', payload: examplePosts });
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Channel />
      <Result />
    </div>
  );
}

export default App;
