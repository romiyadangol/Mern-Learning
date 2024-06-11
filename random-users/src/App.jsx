import "./assets/card.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      {users?.map((value, index) => {
        return (
          <div key={index} className="user-card">
            <h1>{value.name}</h1>
            <p>Email: {value.email}</p>
            <p>Phone: {value.phone}</p>
            <p>Website: {value.website}</p>
            <p>Company Name:{value.company.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
