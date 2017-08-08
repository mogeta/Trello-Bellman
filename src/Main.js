//gas document
//https://developers.google.com/apps-script/reference/calendar/
//how to get trello token
//https://trello.com/1/authorize?key=<上で取得したKey>&name=&expiration=never&response_type=token&scope=read,write
var properties = PropertiesService.getScriptProperties();
var key = properties.getProperty("trello_key");
var token = properties.getProperty("trello_token");
var boardID = properties.getProperty("trello_board_id");
//https://developers.google.com/apps-script/guides/html/
function doGet(e) {
    var params = JSON.stringify(e);
    return HtmlService.createHtmlOutputFromFile('Index');
}
function doPost(e) {
}
function getTaskLists() {
    var trello = new Bellman(key, token);
    var list = trello.getLists(boardID);
    Logger.log(list);
}
function getCards() {
    var trello = new Bellman(key, token);
    var list = trello.getCards("5979a2e6ff434e0108c75eeb");
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var entry = list_1[_i];
        console.log(entry);
    }
}
function UpdateTaskList() {
}
//https://developers.google.com/apps-script/reference/properties/properties-service
function SaveProperties() {
    PropertiesService.getScriptProperties().setProperty("", "");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Rldi9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7QUFDZCwrREFBK0Q7QUFFL0QseUJBQXlCO0FBQ3pCLDRHQUE0RztBQUM1RyxJQUFJLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO0FBQ3hELElBQUksR0FBRyxHQUFVLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEQsSUFBSSxLQUFLLEdBQVUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxRCxJQUFJLE9BQU8sR0FBVSxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFL0Qsd0RBQXdEO0FBQ3hELGVBQWUsQ0FBSztJQUNoQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVELGdCQUFnQixDQUFLO0FBRXJCLENBQUM7QUFFRDtJQUNJLElBQUksTUFBTSxHQUFXLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUVEO0lBQ0ksSUFBSSxNQUFNLEdBQVcsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUV2RCxHQUFHLENBQUMsQ0FBYyxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxDQUFDO1FBQWxCLElBQUksS0FBSyxhQUFBO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUFFRDtBQUVBLENBQUM7QUFFRCxtRkFBbUY7QUFDbkY7SUFDSSxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyJ9