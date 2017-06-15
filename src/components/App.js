import { h, Component } from 'preact';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null,
			loading: true
		}
	}

	componentDidMount() {
		fetch('https://api.github.com/users/anoopmundathan')
			.then(response => response.json())
			.then(user => {
				
				console.log(user);

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
					:
					<div>
						<img src={this.state.user.avatar_url} alt="avatar"/>
						<p>{this.state.user.name}</p>
					</div>
				}

			</div>
		);
	
	}
}