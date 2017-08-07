//https://developers.google.com/apps-script/reference/calendar/


//https://developers.google.com/apps-script/guides/html/
function doGet(e:any){
    var params = JSON.stringify(e);
    return HtmlService.createHtmlOutputFromFile('html/Index');
}

function doPost(e:any){

}