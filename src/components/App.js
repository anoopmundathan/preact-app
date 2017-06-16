import { h, Component } from 'preact';
import User from './User';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null,
			loading: true
		}
	}

	componentDidMount() {
		fetch(this.props.user.url)
			.then(response => response.json())
			.then(user => {
				setTimeout(() => {
					this.setState({
						user: user,
						loading: false
					});	
				}, 3000);
			})
			.catch(err => console.log(err));
	}
	render(props, {loading, user}) {
		return(
			<div>
				{
					loading 
					? 
					<h1>Loading...</h1> 
					: <User src={user.avatar_url} name={user.name}/>
				}
			</div>
		);
	}
}