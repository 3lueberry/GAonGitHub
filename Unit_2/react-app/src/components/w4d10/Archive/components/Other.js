import React, { useEffect, useState } from "react";

const Other = () => {
  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const data = await res.json();

    const theList = data.map((item) => {
      return { id: item.id, name: item.name };
    });

    setUserList(theList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>Other Component</h2>
      <ul>
        {userList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Other;
