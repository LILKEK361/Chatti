import {useState} from "react"
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import ConnectPage from "./components/connect_components/connectpage";
import ServerPage from "./components/server_components/serverpage";

function App() {

	const [connected, setConnected] = useState(false);




  return (
	connected ? 
		<ServerPage /> : <ConnectPage setConnected={setConnected} /> 

  );
}

export default App;
