var Trello = (function () {
    function Trello(key, token) {
        this.key = key;
        this.token = token;
    }
    Trello.prototype.getListStoryPoint = function (cards) {
        var total = 0;
        var regexp = /\((.*)\)/;
        cards.forEach(function (row) {
            var matchResult = row.name.match(regexp);
            if (matchResult != null) {
                total += parseFloat(matchResult[1]);
            }
        });
        return total;
    };
    Trello.prototype.addCard = function (listID, name, desc) {
        var options = {
            'method': 'post',
            'muteHttpExceptions': true,
            'payload': {
                'name': name,
                'desc': desc,
                'due': '',
                'idList': listID,
                'urlSource': ''
            }
        };
        Logger.log(UrlFetchApp.fetch("https://api.trello.com/1/cards/?key=" + this.key + "&token=" + this.token, options));
    };
    Trello.prototype.getLists = function (boardID) {
        var response = UrlFetchApp.fetch("https://api.trello.com/1/boards/" + boardID + "/lists?key=" + this.key + "&token=" + this.token + "&fields=name");
        var res = JSON.parse(response.getContentText());
        return res;
    };
    //リスト内、カード配列取得
    Trello.prototype.getCards = function (listID) {
        var response = UrlFetchApp.fetch("https://api.trello.com/1/lists/" + listID + "/cards?key=" + this.key + "&token=" + this.token);
        var res = JSON.parse(response.getContentText());
        return res;
    };
    return Trello;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlbGxvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZGV2L1RyZWxsby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtJQUlJLGdCQUFtQixHQUFVLEVBQUMsS0FBWTtRQUN0QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrQ0FBaUIsR0FBakIsVUFBa0IsS0FBVztRQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFFeEIsS0FBSyxDQUFDLE9BQU8sQ0FBRSxVQUFVLEdBQUc7WUFDeEIsSUFBSSxXQUFXLEdBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFBLENBQUMsV0FBVyxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2xCLEtBQUssSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLE1BQWEsRUFBQyxJQUFXLEVBQUMsSUFBUTtRQUN0QyxJQUFJLE9BQU8sR0FBRztZQUNWLFFBQVEsRUFBRyxNQUFNO1lBQ2pCLG9CQUFvQixFQUFHLElBQUk7WUFDM0IsU0FBUyxFQUFHO2dCQUNSLE1BQU0sRUFBUSxJQUFJO2dCQUNsQixNQUFNLEVBQVEsSUFBSTtnQkFDbEIsS0FBSyxFQUFTLEVBQUU7Z0JBQ2hCLFFBQVEsRUFBTSxNQUFNO2dCQUNwQixXQUFXLEVBQUcsRUFBRTthQUNuQjtTQUNKLENBQUM7UUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMseUNBQXVDLElBQUksQ0FBQyxHQUFHLGVBQVUsSUFBSSxDQUFDLEtBQU8sRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsT0FBYztRQUVuQixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLHFDQUFtQyxPQUFPLG1CQUFjLElBQUksQ0FBQyxHQUFHLGVBQVUsSUFBSSxDQUFDLEtBQUssaUJBQWMsQ0FBQyxDQUFDO1FBQ3JJLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxjQUFjO0lBQ2QseUJBQVEsR0FBUixVQUFTLE1BQWE7UUFDbEIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxvQ0FBa0MsTUFBTSxtQkFBYyxJQUFJLENBQUMsR0FBRyxlQUFVLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztRQUN2SCxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQUFuREQsSUFtREMifQ==