import React from "react";

import Todos from "./commponents/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Nodejs")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
