import { SheetService } from './sheet.service';
import { Trello } from './Trello';
import CardList = TrelloConst.CardList;

declare var global: any;

var properties = PropertiesService.getScriptProperties();
var trelloKey: string = properties.getProperty('trello_key');
var trelloToken: string = properties.getProperty('trello_token');
var targetBoardID: string = properties.getProperty('trello_board_id');
var targetSheetID: string = properties.getProperty('sheet_id');
var slackToken: string = properties.getProperty('slack_token');
var slackChannel: string = properties.getProperty('slack_post_channel');

global.createNewFile = (): void => {
	const ss = SheetService.createInitialFile('New file');
	ss.getRange('A2').setValue('Happy gas!');
};

global.postSlack = (): void => {
	let slack: Slack;
	slack = new Slack(slackToken);
	slack.post('test ');
};

global.getStorypointAndPost = (): void => {
	const trello = new Trello(trelloKey, trelloToken);
	const slack = new Slack(slackToken);
	const lists = trello.getLists(targetBoardID);
	lists.forEach(function(list) {
		const cards = trello.getCards(list.id);
		const point = trello.getListStoryPoint(cards);
		Logger.log(point);
	});
};

//Trello上のListsを取得する
global.getLists = (): void => {
	var trello: Trello = new Trello(trelloKey, trelloToken);
	const list: CardList[] = trello.getLists(targetBoardID);
	Logger.log(list);
};
