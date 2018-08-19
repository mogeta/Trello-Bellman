import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import { getDayFormat } from './util';
import Integer = GoogleAppsScript.Integer;

export class SheetService {
	private readonly sheetID: string;
	private readonly sheetObj: Spreadsheet;

	public constructor(sheetID: string) {
		this.sheetID = sheetID;
		this.sheetObj = SpreadsheetApp.openById(sheetID);
	}

	static createInitialFile(prefix: string): Spreadsheet {
		const fileName = `${prefix} ${getDayFormat()}`;
		const ss = SpreadsheetApp.create(fileName);
		const range = ss.getRange('A1');
		range.setValue('Hello, clasp!');
		return ss;
	}

	//最終行のデータを取得する
	public getLastRowRange(sheetNum: Integer) {
		const sheet = this.sheetObj.getSheets()[sheetNum];
		const lastRow = sheet.getLastRow();
		const lastCol = sheet.getLastColumn();
		return sheet.getRange(lastRow, 1, 1, lastCol);
	}

	public append(data: object[]) {
		const sheet = this.sheetObj.getSheets()[0];
		sheet.appendRow(data);
	}
}
