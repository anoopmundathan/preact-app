import { h } from 'preact';

const User = (props) => {
	console.log(props);
	return(
		<div>
			<img src={props.src} alt="avatar"/>
			<p>{props.name}</p>
		</div>
	);
}

export default User;