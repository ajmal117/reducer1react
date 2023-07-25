import './App.css';
import { incNum, decNum } from './actions/index.js';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const myState = useSelector((state) => state.changeTheNummber)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <button type='button' onClick={() => { dispatch(decNum()) }}>DEC</button>
        <input value={myState} />
        <button type='button' onClick={() => { dispatch(incNum()) }}>INC</button>
      </div>
    </div>
  );
}

export default App;
