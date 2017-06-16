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
				this.setState({
					user: user,
					loading: false
				});	
			})
			.catch(err => console.log(err));
	}
	render() {
		return(
			<div>
				{
					this.state.loading 
					? 
					<h1>Loading...</h1> 
					: <User src={this.state.user.avatar_url} name={this.state.user.name}/>
				}
			</div>
		);
	
	}
}