import Card = TrelloConst.Card;
import CardList = TrelloConst.CardList;

export class Trello {
	private readonly key: string;
	private readonly token: string;

	public constructor(key: string, token: string) {
		this.key = key;
		this.token = token;
	}

	getListStoryPoint(cards: any[]) {
		let total = 0;
		const regexp = /\((.*)\)/;

		cards.forEach(function(row) {
			let matchResult = row.name.match(regexp);
			if (matchResult != null) {
				total += parseFloat(matchResult[1]);
			}
		});
		return total;
	}

	addCard(listID: string, name: string, desc: any) {
		let payload = {
			name: name,
			desc: desc,
			due: '',
			idList: listID,
			urlSource: ''
		};

		let request: URLFetchRequestOptions = {
			method: 'post',
			muteHttpExceptions: true,
			payload: JSON.stringify(payload)
		};

		Logger.log(
			UrlFetchApp.fetch(
				`https://api.trello.com/1/cards/?key=${this.key}&token=${this.token}`,
				request
			)
		);
	}

	getLists(boardID: string): CardList[] {
		var response = UrlFetchApp.fetch(
			`https://api.trello.com/1/boards/${boardID}/lists?key=${this.key}&token=${
				this.token
			}&fields=name`
		);
		const res = JSON.parse(response.getContentText()) as CardList[];
		Logger.log(res);
		return res;
	}

	//リスト内、カード配列取得
	getCards(listID: string): Card[] {
		const response = UrlFetchApp.fetch(
			`https://api.trello.com/1/lists/${listID}/cards?key=${this.key}&token=${this.token}`
		);
		return JSON.parse(response.getContentText());
	}
}
