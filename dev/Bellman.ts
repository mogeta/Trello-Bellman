import Board = TrelloConst.Board;
import Card = TrelloConst.Card;

class Bellman{
    private key:string;
    private token:string;

    public constructor(key:string,token:string) {
        this.key = key;
        this.token = token;
    }

    getListStoryPoint(cards:any[]){
        var total = 0;
        var regexp = /\((.*)\)/;

        cards.forEach (function (row) {
            var matchResult =  row.name.match(regexp);
            if(matchResult!=null){
                total += parseFloat(matchResult[1]);
            }
        });
        return total;
    }

    addCard(listID:string,name:string,desc:any){
        let options = {
            'method' : 'post',
            'muteHttpExceptions' : true,
            'payload' : {
                'name'      : name,
                'desc'      : desc,
                'due'       : '',
                'idList'    : listID,
                'urlSource' : ''
            }
        };
        Logger.log(UrlFetchApp.fetch(`https://api.trello.com/1/cards/?key=${this.key}&token=${this.token}`,options));
    }

    getLists(boardID:string):Board {

        var response = UrlFetchApp.fetch(`https://api.trello.com/1/boards/${boardID}/lists?key=${this.key}&token=${this.token}&fields=name`);
        var res:Board = JSON.parse(response.getContentText());
        return res;
    }

    //リスト内、カード配列取得
    getCards(listID:string):Card[]{
        var response = UrlFetchApp.fetch(`https://api.trello.com/1/lists/${listID}/cards?key=${this.key}&token=${this.token}`);
        var res:Card[] = JSON.parse(response.getContentText());
        return res;
    }

}