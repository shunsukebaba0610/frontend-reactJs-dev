import React, { useState } from "react";
import { List, From } from './components';

//class App extends React.Component {
const App = () => {
  const [desc, setDesc] = useState('クリック前');

  const changeDescription = () => {
    setDesc('クリック後');
  }

  return (
    <div>
      <header>
        <ul>
          <li>リスト</li>
          <li>フォーム</li>
        </ul>
      </header>
      <hr />
      <List title="取り扱い言語一覧" />
      <From />
      <button type="button" onClick={() => changeDescription()}>{desc}</button>
    </div>
  )
}

export default App;
