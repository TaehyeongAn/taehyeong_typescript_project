import React from "react";
import "./app.css";
const App = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="appContainer">
          <input
            type="text"
            className="inputText"
            placeholder="내용을 입력후 엔터"
          />
        </div>
      </div>
    </div>
  );
};
export default App;
