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
        return JSON.parse(response.getContentText());
    };
    //リスト内、カード配列取得
    Bellman.prototype.getCards = function (list) {
        var response = UrlFetchApp.fetch("https://api.trello.com/1/lists/" + list + "/cards?key=" + this.key + "&token=" + this.token);
        return JSON.parse(response.getContentText());
    };
    return Bellman;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVsbG1hbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Rldi9CZWxsbWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBSUksaUJBQW1CLEdBQVUsRUFBQyxLQUFZO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFpQixHQUFqQixVQUFrQixLQUFXO1FBQ3pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUV4QixLQUFLLENBQUMsT0FBTyxDQUFFLFVBQVUsR0FBRztZQUN4QixJQUFJLFdBQVcsR0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUEsQ0FBQyxXQUFXLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDbEIsS0FBSyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5QkFBTyxHQUFQLFVBQVEsTUFBYSxFQUFDLElBQVcsRUFBQyxJQUFRO1FBQ3RDLElBQUksT0FBTyxHQUFHO1lBQ1YsUUFBUSxFQUFHLE1BQU07WUFDakIsb0JBQW9CLEVBQUcsSUFBSTtZQUMzQixTQUFTLEVBQUc7Z0JBQ1IsTUFBTSxFQUFRLElBQUk7Z0JBQ2xCLE1BQU0sRUFBUSxJQUFJO2dCQUNsQixLQUFLLEVBQVMsRUFBRTtnQkFDaEIsUUFBUSxFQUFNLE1BQU07Z0JBQ3BCLFdBQVcsRUFBRyxFQUFFO2FBQ25CO1NBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyx5Q0FBdUMsSUFBSSxDQUFDLEdBQUcsZUFBVSxJQUFJLENBQUMsS0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVELDBCQUFRLEdBQVIsVUFBUyxPQUFjO1FBRW5CLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMscUNBQW1DLE9BQU8sbUJBQWMsSUFBSSxDQUFDLEdBQUcsZUFBVSxJQUFJLENBQUMsS0FBSyxpQkFBYyxDQUFDLENBQUM7UUFDckksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGNBQWM7SUFDZCwwQkFBUSxHQUFSLFVBQVMsSUFBUTtRQUNiLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsb0NBQWtDLElBQUksbUJBQWMsSUFBSSxDQUFDLEdBQUcsZUFBVSxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUM7UUFDckgsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQUFDLEFBakRELElBaURDIn0=