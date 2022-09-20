import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../features/count/countSlice";
import { AppDispatch, RootState } from "../store/store";

interface CounterProps {
  label: string;
}

export default function Counter({ label }: CounterProps) {
  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch<AppDispatch>();

  function handleClick() {
    dispatch(setCount(count + 1));
  }

  return (
    <button onClick={handleClick}>
      {label} {count}
    </button>
  );
}
