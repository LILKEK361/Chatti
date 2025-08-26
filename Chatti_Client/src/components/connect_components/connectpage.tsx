import ConnectionInput from "./ConnectionInput";
import "./conntection.css"

function ConnectPage({setConnected }) {

	return (
		
		
		<div className="ConnectPage">

		<ConnectionInput setConnected={setConnected} />

		</div>


	)

}

export default ConnectPage;
