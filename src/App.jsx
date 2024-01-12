import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./store/todos";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { todos, error, loading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1 style={{ color: "red" }}>{error}</h1>

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
}

export default App;
