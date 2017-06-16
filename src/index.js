import {h, render} from 'preact';
import App from './components/App';

const config = {
	user: {
		url: 'https://api.github.com/users/anoopmundathan'
	}
}
render(<App user={config.user}/>, document.getElementById('root'));