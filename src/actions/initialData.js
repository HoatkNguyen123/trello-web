export const initialData = {
	board: [
		{
			id: 'board-1',
			columnOrder: ['column-1', 'column-2', 'column-3'],
			columns: [
				{
					id: 'column-1',
					boardId: 'board-1',
					title: 'To do column 1',
					cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
					cards: [
						{
							id: 'card-1',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Card 1',
							cover: './logo192.png'
						},
						{
							id: 'card-2',
							boardId: 'board-2',
							columnId: 'column-2',
							title: 'Card 2',
							cover: null
						},
						{
							id: 'card-3',
							boardId: 'board-3',
							columnId: 'column-3',
							title: 'Card 3',
							cover: null
						},
						{
							id: 'card-4',
							boardId: 'board-4',
							columnId: 'column-4',
							title: 'Card 4',
							cover: null
						},
						{
							id: 'card-5',
							boardId: 'board-5',
							columnId: 'column-5',
							title: 'Card 5',
							cover: null
						},
						{
							id: 'card-6',
							boardId: 'board-6',
							columnId: 'column-6',
							title: 'Card 6',
							cover: null
						},
						{
							id: 'card-7',
							boardId: 'board-7',
							columnId: 'column-7',
							title: 'Card 7',
							cover: null
						}
					]
				},
				{
					id: 'column-2',
					boardId: 'board-1',
					title: 'To do column 2',
					cardOrder: ['card-8', 'card-9', 'card-10'],
					cards: [
						{
							id: 'card-8',
							boardId: 'board-1',
							columnId: 'column-2',
							title: 'Card 8',
							cover: null
						},
						{
							id: 'card-9',
							boardId: 'board-2',
							columnId: 'column-2',
							title: 'Card 9',
							cover: null
						},
						{
							id: 'card-10',
							boardId: 'board-3',
							columnId: 'column-3',
							title: 'Card 10',
							cover: null
						}
					]
				},
				{
					id: 'column-3',
					boardId: 'board-1',
					title: 'To do column 3',
					cardOrder: ['card-11', 'card-12', 'card-13'],
					cards: [
						{
							id: 'card-11',
							boardId: 'board-1',
							columnId: 'column-2',
							title: 'Card 11',
							cover: null
						},
						{
							id: 'card-12',
							boardId: 'board-2',
							columnId: 'column-2',
							title: 'Card 12',
							cover: null
						},
						{
							id: 'card-13',
							boardId: 'board-3',
							columnId: 'column-3',
							title: 'Card 13',
							cover: null
						}
					]
				}
			]
		}

	]
}