import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { FirebaseContext, useAuth } from "./firebase";

function App() {
  const firebase = useContext(FirebaseContext);
  const user = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        {user?.displayName}
        <button onClick={() => firebase.login()}>Login</button>
      </header>
    </div>
  );
}

export default App;
