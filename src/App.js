import './App.css';
import {Provider} from "react-redux";
import RoutesIndex from "./routes/RoutesIndex";
import store from "./setup/redux/Store";

function App() {
  return (
      <Provider store={store}>
        <RoutesIndex />
      </Provider>
  );
}

export default App;
