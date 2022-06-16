import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { addPost, deletePost } from "./features/postsSlice";

function App() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const postsList = useSelector((state: RootState) => state.posts.value);
  console.log(postsList);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postsList.length + 1,
        title: title,
        body: body,
      })
    );
    setTitle("");
    setBody("");
  };

  return (
    <div className="App">
      <h1>React Redux 掲示板</h1>
      <div className="addPost">
        <input
          type="text"
          placeholder="タイトル"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          value={title}
        />
        <input
          type="text"
          placeholder="レビュー"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBody(e.target.value)
          }
          value={body}
        />
        <button onClick={handleClick}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postsList.map(({ id, title, body }) => (
          <div key={id} className="post">
            <h2>{title}</h2>
            <div className="postContent">{body}</div>
            <button onClick={() => dispatch(deletePost({ id: id }))}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
