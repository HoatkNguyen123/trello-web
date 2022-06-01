import React, { useEffect, useState } from "react";
import { isEmpty } from 'lodash';
import './BoardContent.scss';
import Column from 'components/Column/Column.js';
import { mapOrder } from "utilities/sorts";
import { initialData } from 'actions/initialData';

function BoardContent() {

	const [board, setBoard] = useState({});

	const [columns, setColumns] = useState([]);

	useEffect(() => {

		const boardFromDB = initialData.board.find(board => board.id === 'board-1')

		if (boardFromDB) {
			setBoard(boardFromDB)
			setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
		}
	}, [])

	if (isEmpty(board)) {
		return (<div className="not-found">Board not found!</div>)
	}

	return (
		<div className='board-content'>
			{columns.map((column, index) => {
				return <Column key={index} column={column} />
			})}
		</div>
	)
}

export default BoardContent;