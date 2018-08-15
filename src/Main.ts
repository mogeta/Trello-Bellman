//gas document
//https://developers.google.com/apps-script/reference/calendar/
//how to get trello trelloToken
//https://trello.com/1/authorize?key=<上で取得したKey>&name=&expiration=never&response_type=trelloToken&scope=read,write
import List = TrelloConst.List;
import { Trello } from './Trello';

var properties = PropertiesService.getScriptProperties();
var trelloKey: string = properties.getProperty('trello_key');
var trelloToken: string = properties.getProperty('trello_token');
var targetBoardID: string = properties.getProperty('trello_board_id');
var targetSheetID: string = properties.getProperty('sheet_id');
var slackToken: string = properties.getProperty('slack_token');
var slackChannel: string = properties.getProperty('slack_post_channel');

//https://developers.google.com/apps-script/guides/html/
function doGet(e: any) {
	var params = JSON.stringify(e);
	return HtmlService.createTemplateFromFile('Index').evaluate();
}

function doPost(e: any) {}

//Trello上のListsを取得する
function getLists(boardID: string): List[] {
	var trello: Trello = new Trello(trelloKey, trelloToken);
	var list = trello.getLists(boardID);
	Logger.log(list);
	return list;
}

//Trello上、指定ListのCardを取得する
function getCards(listID: string) {
	var trello: Trello = new Trello(trelloKey, trelloToken);
	var list = trello.getCards(listID);

	for (let entry of list) {
		console.log(entry);
	}
	return list;
}

//TrelloのカードをSpreadSheet上に並べる。
function reflectAllCard() {
	var result: any = [];

	var lists = getLists(targetBoardID);
	for (let list of lists) {
		var cards = getCards(list.id);
		for (let card of cards) {
			result.push([card.name, card.id, card.url]);
		}
	}

	var ss = SpreadsheetApp.openById(targetSheetID);
	var sheet = ss.getSheetByName('sheet');
	sheet.getRange(1, 1, result.length, result[0].length).setValues(result);

	var slack = new Slack(slackToken);
	slack.post('test', slackChannel);
}

//https://developers.google.com/apps-script/reference/properties/properties-service
function SaveProperties() {
	PropertiesService.getScriptProperties().setProperty('', '');
}
