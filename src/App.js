import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUsername, deleteUser } from "./redux/Users";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className='App'>
      <div className='addUSer'>
        <input
          type='text'
          placeholder='Name...'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type='text'
          placeholder='UserName...'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <button
          onClick={() => {
            dispatch(addUser({ id: userList.length + 1, name, username }));
          }}
        >
          Add User
        </button>
      </div>

      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.id}</h1>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>

              <input
                type='text'
                placeholder='New UserName...'
                onChange={(e) => {
                  setNewUsername(e.target.value);
                }}
              />

              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                Update UserName
              </button>

              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
