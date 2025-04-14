import React from "react";
import "./app.css";
const App = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="appContainer">
          <input
            type="text"
            className="inputText"
            placeholder="내용을 입력후 엔터"
          />
        </div>
      </div>
    </>
  );
};
export default App;
