import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

export class Slack {
	private POST_URL: string = 'https://slack.com/api/chat.postMessage';
	private token: string = '';

	public constructor(token: string) {
		this.token = token;
	}

	public createPayload() {}

	//https://api.slack.com/methods/chat.postMessage
	public post(message: string, chan: string = 'general') {
		const url = this.POST_URL;
		const token: string = this.token;
		const channel = chan;
		const text = message;
		const username = 'bot';
		const parse = 'full';
		const icon_emoji = ':sunny:';

		const payload = {
			token: token,
			channel: channel,// TODO
			text: text,
			username: username,
			parse: parse,
			icon_emoji: icon_emoji
		};
		const request: URLFetchRequestOptions = {
			method: 'post',
			payload: JSON.stringify(payload)
		};

		const response = UrlFetchApp.fetch(url, request);

		Logger.log(response);
	}
}
