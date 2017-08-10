//slackへの投稿等を担当。
var Slack = (function () {
    function Slack(token) {
        this.POST_URL = "https://slack.com/api/chat.postMessage";
        this.token = "";
        this.token = token;
    }
    Slack.prototype.createPayload = function () {
    };
    //https://api.slack.com/methods/chat.postMessage
    Slack.prototype.post = function (message, chan) {
        if (chan === void 0) { chan = "general"; }
        var url = this.POST_URL;
        var token = this.token;
        var channel = chan;
        var text = message;
        var username = 'bot';
        var parse = 'full';
        var icon_emoji = ':sunny:';
        var method = 'post';
        var payload = {
            'token': token,
            'channel': channel,
            'text': text,
            'username': username,
            'parse': parse,
            'icon_emoji': icon_emoji
        };
        var params = {
            'method': method,
            'payload': payload
        };
        var response = UrlFetchApp.fetch(url, params);
    };
    return Slack;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZXYvU2xhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0lBSUksZUFBbUIsS0FBYTtRQUh4QixhQUFRLEdBQVcsd0NBQXdDLENBQUM7UUFDNUQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUd2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sNkJBQWEsR0FBcEI7SUFFQSxDQUFDO0lBRUQsZ0RBQWdEO0lBQ3pDLG9CQUFJLEdBQVgsVUFBWSxPQUFlLEVBQUUsSUFBd0I7UUFBeEIsb0JBQXdCLEdBQXhCLGdCQUF3QjtRQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hCLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNuQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFcEIsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsS0FBSztZQUNkLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLE1BQU0sRUFBRSxJQUFJO1lBQ1osVUFBVSxFQUFFLFFBQVE7WUFDcEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxZQUFZLEVBQUUsVUFBVTtTQUMzQixDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUc7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsT0FBTztTQUNyQixDQUFDO1FBRUYsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDIn0=