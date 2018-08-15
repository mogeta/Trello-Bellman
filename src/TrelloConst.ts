declare namespace TrelloConst {
	export interface List {
		id: string;
		name: string;
	}

	export interface Badges {
		votes: number;
		viewingMemberVoted: boolean;
		subscribed: boolean;
		fogbugz: string;
		checkItems: number;
		checkItemsChecked: number;
		comments: number;
		attachments: number;
		description: boolean;
		due?: any;
		dueComplete: boolean;
	}

	export interface Label {
		id: string;
		idBoard: string;
		name: string;
		color: string;
		uses: number;
	}

	export interface Card {
		id: string;
		checkItemStates?: any;
		closed: boolean;
		dateLastActivity: Date;
		desc: string;
		descData?: any;
		idBoard: string;
		idList: string;
		idMembersVoted: any[];
		idShort: number;
		idAttachmentCover?: any;
		limits?: any;
		idLabels: string[];
		manualCoverAttachment: boolean;
		name: string;
		pos: number;
		shortLink: string;
		badges: Badges;
		dueComplete: boolean;
		due?: any;
		idChecklists: string[];
		idMembers: any[];
		labels: Label[];
		shortUrl: string;
		subscribed: boolean;
		url: string;
	}
}
