//gas document
//https://developers.google.com/apps-script/reference/calendar/

//how to get trello token
//https://trello.com/1/authorize?key=<上で取得したKey>&name=&expiration=never&response_type=token&scope=read,write
var properties = PropertiesService.getScriptProperties()
var key:string = properties.getProperty("trello_key");
var token:string = properties.getProperty("trello_token");
var boardID:string = properties.getProperty("trello_board_id");

//https://developers.google.com/apps-script/guides/html/
function doGet(e:any){
    var params = JSON.stringify(e);
    return HtmlService.createHtmlOutputFromFile('Index');
}

function doPost(e:any){

}

function getTaskLists(){
    var trello:Bellman = new Bellman(key,token);
    var list = trello.getLists(boardID);
    Logger.log(list);
}

function getCards(){
    var trello:Bellman = new Bellman(key,token);
    var list = trello.getCards("");

    for (let entry of list) {
        console.log(entry);
    }
}

function UpdateTaskList(){

}

//https://developers.google.com/apps-script/reference/properties/properties-service
function SaveProperties(){
    PropertiesService.getScriptProperties().setProperty("","");
}
