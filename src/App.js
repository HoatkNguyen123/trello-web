import './App.scss';

function App() {
	return (
		<div className="trello-master">
			<nav className='navbar app'>App Bar</nav>
			<nav className='navbar board'>Board Bar</nav>
			<div className='board-columns'>
				<div className='column'>
					<header>header</header>
					<ul>
						<li>
							<img src='./logo192.png' alt=''></img>
							title: trello
						</li>
						<li>
							what your's name
						</li>
						<li>
							what your's name
						</li>
						<li>
							what your's name
						</li>
						<li>
							what your's name
						</li>
						<li>
							what your's name
						</li>
						<li>
							what your's name
						</li>
					</ul>
					<footer>footer</footer>
				</div>
			</div>
		</div>
	);
}

export default App;
