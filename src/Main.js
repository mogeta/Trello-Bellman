//https://developers.google.com/apps-script/reference/calendar/
//https://developers.google.com/apps-script/guides/html/
function doGet(e) {
    var params = JSON.stringify(e);
    return HtmlService.createHtmlOutputFromFile('html/Index');
}
function doPost(e) {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Rldi9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDtBQUcvRCx3REFBd0Q7QUFDeEQsZUFBZSxDQUFLO0lBQ2hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsZ0JBQWdCLENBQUs7QUFFckIsQ0FBQyJ9