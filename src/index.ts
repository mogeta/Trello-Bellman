import { SheetService } from './sheet.service';
import { Trello } from './Trello';
import Spreadsheet = GoogleAppsScript.Spreadsheet;
import { getDayFormat } from './util';

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

// タスク集計を行います。
global.execute = (): void => {
	const sheetService = new SheetService(targetSheetID);
	const range = sheetService.getLastRowRange(0);
	const lastPoints = range.getValues()[0];
	const points = global.getStorypoints();
	let index = 1;

	points.forEach(point => {
		// Logger.log(point);
		// Logger.log(lastPoints[index]);
		if (index == 3) {
			const diff = point - Number(lastPoints[index]);
			Logger.log('差分は' + diff);
		}
		index++;
	});
	points.unshift(getDayFormat());
	sheetService.append(points);
};

//Trello上のListsを取得する
global.getStorypoints = (): Number[] => {
	let points = [];
	const trello = new Trello(trelloKey, trelloToken);
	const lists = trello.getLists(targetBoardID);
	lists.forEach(function(list) {
		const cards = trello.getCards(list.id);
		const point = trello.getListStoryPoint(cards);
		points.push(point);
	});
	return points;
};

global.getSheetData = (): Spreadsheet.Range => {
	const sheetID = targetSheetID;
	const sheetService = new SheetService(sheetID);
	const range = sheetService.getLastRowRange(0);
	Logger.log(range);
	return range;
};
