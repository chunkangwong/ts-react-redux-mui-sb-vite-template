import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { setCount } from "./features/count/countSlice";
import { RootState } from "./store/store";

function App() {
  const { count } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setCount(count + 1));
  }

  return (
    <div className="App">
      <Typography>Hello World</Typography>
      <Button onClick={handleClick} variant="contained">
        {count}
      </Button>
    </div>
  );
}

export default App;
