//slackへの投稿等を担当。
import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

class Slack {
  private POST_URL: string = 'https://slack.com/api/chat.postMessage';
  private token: string = '';

  public constructor(token: string) {
    this.token = token;
  }

  public createPayload() {}

  //https://api.slack.com/methods/chat.postMessage
  public post(message: string, chan: string = 'general') {
    var url = this.POST_URL;
    var token: string = this.token;
    var channel = chan;
    var text = message;
    var username = 'bot';
    var parse = 'full';
    var icon_emoji = ':sunny:';
    var method = 'post';

    var payload = {
      token: token,
      channel: channel,
      text: text,
      username: username,
      parse: parse,
      icon_emoji: icon_emoji
    };

    var request: URLFetchRequestOptions;
    request.method = 'post';
    request.payload = payload.toString();

    var params = {
      method: method,
      payload: payload
    };

    var response = UrlFetchApp.fetch(url, request);
  }
}
