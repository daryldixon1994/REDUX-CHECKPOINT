import { useSelector, useDispatch } from "react-redux";
import {increment} from './actions/increment';
import {decrement} from './actions/decrement';
import {logIn} from './actions/LogIn';

function App() {
    const counter = useSelector((state) => state.counter);
    const logger = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Hello</h1>
            <p>Counter {counter}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <br />
            <button onClick={() => dispatch(logIn())}>Click me</button>
        </div>
    );
}

export default App;
