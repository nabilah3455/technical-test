import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { list: "Membuat Program 1", toogle: false },
    { list: "Membuat Program 2", toogle: false },
  ]);

  const [data, setData] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;

    setData(value);
  };

  const handleSubmit = () => {
    if (data !== "") {
      const value = list.filter((el) => el.list === data);

      if (value.length !== 0) {
        alert("sudah diisi");
      } else {
        setList([...list, { list: data, toogle: false }]);
        setData("");
      }
    } else {
      alert("List tidak boleh kosong");
    }
  };

  const toogleList = (name) => {
    const index = list.findIndex((el) => el.list === name);
    list[index].toogle = !list[index].toogle;
    console.log(list);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <div>
        <input type="text" value={data} onChange={handleChange} />
        <button onClick={handleSubmit}>Tambah</button>
      </div>

      <div>
        {list.map((el, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={el.toogle}
                onChange={() => toogleList(el.list)}
              />
              <p className={el.toogle ? "line" : ""}>{el.list}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
