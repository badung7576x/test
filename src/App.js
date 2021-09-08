import React, { useState } from 'react'
import useCustomHook from './hook';

function App() {
  const initLists = ["Huyen", "Hoa", "Hung", "Long"];
  const [input, setInput] = useState("");
  const [lists, addElement] = useCustomHook(initLists)

  const showList = (lists) =>  {
    let result = "[";
    lists.forEach(element => {
      result = result + element + ", ";
    });
    result = result.substring(0, result.length -2 ) + "]";
    return result;
  }

  const clickBtn = () =>  {
    addElement(input);
    setInput('')
  }

  return (
    <div className="App" style={{padding: "20px 40px"}}>
      <p> 
        学生一覧：{  showList(initLists) }
      </p>
      <p>
        追加する名前を入力してください。
      </p>
      <div>
        <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>　
        <button onClick={clickBtn}>確認</button>
      </div>
      <p>追加する名前: { input }</p>
      <p>
        新しい一覧：{  showList(lists) }
      </p>
    </div>
  );
}

export default App;
