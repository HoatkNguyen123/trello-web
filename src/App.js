import React from 'react'
import './App.scss'
import AppBar from 'components/AppBar/AppBar.js'
import BoardBar from 'components/BoardBar/BoardBar.js'
import BoardContent from 'components/BoardContent/BoardContent.js'

function App() {
	return (
		<div className="trello-master">
			<AppBar />
			<BoardBar />
			<BoardContent />
		</div>
	)
}

export default App
