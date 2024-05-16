import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data.filter(post => post.userId === userId));
        setLoading(false); 
      });
  }, []);

  const handleUserChange = (btn) => {
    setLoading(true); 
    let newUserId;
    if (btn === 'next') {
      newUserId = userId + 1;
    } else if (btn === 'previous') {
      newUserId = userId - 1;
    }
    setUserId(newUserId);
    setTimeout(() => {
      setFilteredPosts(posts.filter(post => post.userId === newUserId));
      setLoading(false); 
    }, 1000);
  };

  return (
    <>
      <div className="card-wrapper">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredPosts.map((value, index) => (
            <div key={index} className='container'>
              <p>userID: {value.userId}</p>
              <p>id: {value.id}</p>
              <p>title: {value.title}</p>
              <p>body: {value.body}</p>
            </div>
          ))
        )}
      </div>

      {!loading && (
        <div className="button-container">
          <button onClick={() => handleUserChange('previous')}>Previous</button>
          <button onClick={() => handleUserChange('next')}>Next</button>
        </div>
      )}
    </>
  );
}

export default App;
