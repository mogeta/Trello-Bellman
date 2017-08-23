var properties = PropertiesService.getScriptProperties();
var trelloKey = properties.getProperty("trello_key");
var trelloToken = properties.getProperty("trello_token");
var targetBoardID = properties.getProperty("trello_board_id");
var targetSheetID = properties.getProperty("sheet_id");
var slackToken = properties.getProperty("slack_token");
var slackChannel = properties.getProperty("slack_post_channel");
//https://developers.google.com/apps-script/guides/html/
function doGet(e) {
    var params = JSON.stringify(e);
    return HtmlService
        .createTemplateFromFile('Index')
        .evaluate();
}
function doPost(e) {
}
//Trello上のListsを取得する
function getLists(boardID) {
    var trello = new Trello(trelloKey, trelloToken);
    var list = trello.getLists(boardID);
    Logger.log(list);
    return list;
}
//Trello上、指定ListのCardを取得する
function getCards(listID) {
    var trello = new Trello(trelloKey, trelloToken);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Rldi9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLElBQUksVUFBVSxHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUE7QUFDeEQsSUFBSSxTQUFTLEdBQVUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1RCxJQUFJLFdBQVcsR0FBVSxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2hFLElBQUksYUFBYSxHQUFVLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyRSxJQUFJLGFBQWEsR0FBVSxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlELElBQUksVUFBVSxHQUFVLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDOUQsSUFBSSxZQUFZLEdBQVUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBR3ZFLHdEQUF3RDtBQUN4RCxlQUFlLENBQUs7SUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixNQUFNLENBQUMsV0FBVztTQUNiLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztTQUMvQixRQUFRLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRUQsZ0JBQWdCLENBQUs7QUFFckIsQ0FBQztBQUVELG9CQUFvQjtBQUNwQixrQkFBa0IsT0FBYztJQUM1QixJQUFJLE1BQU0sR0FBVSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELDBCQUEwQjtBQUMxQixrQkFBa0IsTUFBYTtJQUMzQixJQUFJLE1BQU0sR0FBVSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVuQyxHQUFHLENBQUMsQ0FBYyxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxDQUFDO1FBQWxCLElBQUksS0FBSyxhQUFBO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELDhCQUE4QjtBQUM5QjtJQUNJLElBQUksTUFBTSxHQUFPLEVBQUUsQ0FBQztJQUVwQixJQUFJLEtBQUssR0FBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkMsR0FBRyxDQUFBLENBQWEsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssQ0FBQztRQUFsQixJQUFJLElBQUksY0FBQTtRQUNSLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFBLENBQWEsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssQ0FBQztZQUFsQixJQUFJLElBQUksY0FBQTtZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7S0FDSjtJQUVELElBQUksRUFBRSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXJFLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFHRCxtRkFBbUY7QUFDbkY7SUFDSSxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyJ9