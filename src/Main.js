var properties = PropertiesService.getScriptProperties();
var key = properties.getProperty("trello_key");
var token = properties.getProperty("trello_token");
var targetBoardID = properties.getProperty("trello_board_id");
var targetSheetID = properties.getProperty("sheet_id");
var slackToken = properties.getProperty("slack_token");
var slackChannel = properties.getProperty("slack_post_channel");
//https://developers.google.com/apps-script/guides/html/
function doGet(e) {
    var params = JSON.stringify(e);
    return HtmlService.createHtmlOutputFromFile('Index');
}
function doPost(e) {
}
//Trello上のListsを取得する
function getLists(boardID) {
    var trello = new Trello(key, token);
    var list = trello.getLists(boardID);
    Logger.log(list);
    return list;
}
//Trello上、指定ListのCardを取得する
function getCards(listID) {
    var trello = new Trello(key, token);
    var list = trello.getCards(listID);
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var entry = list_1[_i];
        console.log(entry);
    }
    return list;
}
//TrelloのカードをSpreadSheet上に並べる。
function reflectAllCard() {
    var result = [];
    var lists = getLists(targetBoardID);
    for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
        var list = lists_1[_i];
        var cards = getCards(list.id);
        for (var _a = 0, cards_1 = cards; _a < cards_1.length; _a++) {
            var card = cards_1[_a];
            result.push([card.name, card.id, card.url]);
        }
    }
    var ss = SpreadsheetApp.openById(targetSheetID);
    var sheet = ss.getSheetByName("sheet");
    sheet.getRange(1, 1, result.length, result[0].length).setValues(result);
    var slack = new Slack(slackToken);
    slack.post("test", slackChannel);
}
//https://developers.google.com/apps-script/reference/properties/properties-service
function SaveProperties() {
    PropertiesService.getScriptProperties().setProperty("", "");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Rldi9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLElBQUksVUFBVSxHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUE7QUFDeEQsSUFBSSxHQUFHLEdBQVUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0RCxJQUFJLEtBQUssR0FBVSxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzFELElBQUksYUFBYSxHQUFVLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyRSxJQUFJLGFBQWEsR0FBVSxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlELElBQUksVUFBVSxHQUFVLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDOUQsSUFBSSxZQUFZLEdBQVUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBR3ZFLHdEQUF3RDtBQUN4RCxlQUFlLENBQUs7SUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFFRCxnQkFBZ0IsQ0FBSztBQUVyQixDQUFDO0FBRUQsb0JBQW9CO0FBQ3BCLGtCQUFrQixPQUFjO0lBQzVCLElBQUksTUFBTSxHQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsMEJBQTBCO0FBQzFCLGtCQUFrQixNQUFhO0lBQzNCLElBQUksTUFBTSxHQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRW5DLEdBQUcsQ0FBQyxDQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLENBQUM7UUFBbEIsSUFBSSxLQUFLLGFBQUE7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsOEJBQThCO0FBQzlCO0lBQ0ksSUFBSSxNQUFNLEdBQU8sRUFBRSxDQUFDO0lBRXBCLElBQUksS0FBSyxHQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuQyxHQUFHLENBQUEsQ0FBYSxVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxDQUFDO1FBQWxCLElBQUksSUFBSSxjQUFBO1FBQ1IsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUEsQ0FBYSxVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxDQUFDO1lBQWxCLElBQUksSUFBSSxjQUFBO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztLQUNKO0lBRUQsSUFBSSxFQUFFLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckUsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUdELG1GQUFtRjtBQUNuRjtJQUNJLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztBQUMvRCxDQUFDIn0=