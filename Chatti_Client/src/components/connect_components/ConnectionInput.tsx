import {useState} from "react";



function ConnectionInput({connectToServer}) {
	
	const [ipaddress, setIpAddr] = useState("");
	const [pass, setPass] = useState("");
	const [Nickname, setNickName ] = useState("");

	return (

		<div className="ConnenectionHolder">
		<ul>
		<li><p>Welcome to Chatti. Pls enter a valid Server IP Address and Password to join your friends in a call.</p></li>
		<li><input value={ipaddress} placeholder="IP Address + Port" /></li>
		<li><input value={pass} placeholder="ServerPassword"/></li>
		<li><input value={Nickname} placeholder="Nickname"/></li>
		<li><button className="ConnectBtn" onClick={() =>{connectToServer(ipaddress, pass, Nickname)}}>Connect</button></li>


		</ul>	


		</div>

	)
}


export default ConnectionInput;
