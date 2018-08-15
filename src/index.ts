import { SheetService } from './sheet.service';
import { Trello } from './Trello';

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

//Trello上のListsを取得する
global.getLists = (): void => {
	var trello: Trello = new Trello(trelloKey, trelloToken);
	var list = trello.getLists(targetBoardID);
	Logger.log(list);
};
