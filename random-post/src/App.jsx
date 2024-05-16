import "./assets/card.css";
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if(response.ok) {
          return response.json();
      }
      throw response;
      })
      .then(data => {
        setPosts(data);
        setFilteredPosts(data.filter(post => post.userId === userId));
        setLoading(false); 
      })
      .catch(error => {
        setError(error);
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
    <div className="header">
        <h1>User ID: {userId}</h1>
    </div>
      <div className="card-wrapper">
      {error ? (
          <p>Error: {error}</p>
        ) :
        loading ? (
          <p>Loading...</p>
        ) : (
          filteredPosts.map((value, index) => (
            <div key={index} className='container'>
              <div className="content">
                <span>id: {value.id}</span>
                <h2>{value.title}</h2>
                <p>{value.body}</p>
              </div>
              <div className="image">
                <img src={`https://picsum.photos/200/300?random=${index}`} alt="" />
              </div>
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
