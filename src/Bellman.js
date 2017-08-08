var Bellman = (function () {
    function Bellman(key, token) {
        this.key = key;
        this.token = token;
    }
    Bellman.prototype.getListStoryPoint = function (cards) {
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
    Bellman.prototype.addCard = function (listID, name, desc) {
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
    Bellman.prototype.getLists = function (boardID) {
        var response = UrlFetchApp.fetch("https://api.trello.com/1/boards/" + boardID + "/lists?key=" + this.key + "&token=" + this.token + "&fields=name");
        var res = JSON.parse(response.getContentText());
        return res;
    };
    //リスト内、カード配列取得
    Bellman.prototype.getCards = function (listID) {
        var response = UrlFetchApp.fetch("https://api.trello.com/1/lists/" + listID + "/cards?key=" + this.key + "&token=" + this.token);
        var res = JSON.parse(response.getContentText());
        return res;
    };
    return Bellman;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVsbG1hbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Rldi9CZWxsbWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0lBSUksaUJBQW1CLEdBQVUsRUFBQyxLQUFZO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFpQixHQUFqQixVQUFrQixLQUFXO1FBQ3pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUV4QixLQUFLLENBQUMsT0FBTyxDQUFFLFVBQVUsR0FBRztZQUN4QixJQUFJLFdBQVcsR0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUEsQ0FBQyxXQUFXLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDbEIsS0FBSyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5QkFBTyxHQUFQLFVBQVEsTUFBYSxFQUFDLElBQVcsRUFBQyxJQUFRO1FBQ3RDLElBQUksT0FBTyxHQUFHO1lBQ1YsUUFBUSxFQUFHLE1BQU07WUFDakIsb0JBQW9CLEVBQUcsSUFBSTtZQUMzQixTQUFTLEVBQUc7Z0JBQ1IsTUFBTSxFQUFRLElBQUk7Z0JBQ2xCLE1BQU0sRUFBUSxJQUFJO2dCQUNsQixLQUFLLEVBQVMsRUFBRTtnQkFDaEIsUUFBUSxFQUFNLE1BQU07Z0JBQ3BCLFdBQVcsRUFBRyxFQUFFO2FBQ25CO1NBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyx5Q0FBdUMsSUFBSSxDQUFDLEdBQUcsZUFBVSxJQUFJLENBQUMsS0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVELDBCQUFRLEdBQVIsVUFBUyxPQUFjO1FBRW5CLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMscUNBQW1DLE9BQU8sbUJBQWMsSUFBSSxDQUFDLEdBQUcsZUFBVSxJQUFJLENBQUMsS0FBSyxpQkFBYyxDQUFDLENBQUM7UUFDckksSUFBSSxHQUFHLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGNBQWM7SUFDZCwwQkFBUSxHQUFSLFVBQVMsTUFBYTtRQUNsQixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLG9DQUFrQyxNQUFNLG1CQUFjLElBQUksQ0FBQyxHQUFHLGVBQVUsSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQ3ZILElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQyJ9