class Book{
    constructor(author){
        this._author = author;
        this._code = "";
    }

    //getter
    get writer(){
        return this._author;
    }

    //setter
    set libraryCode(code){
        this._code = code;
    }

    //getter
    get libraryCode(){
        return this._code;
    }
}

let goldBug = new Book('nonicalx');
goldBug.libraryCode = "Zan123ku";
 let libraryCode = goldBug.libraryCode;

 console.log(libraryCode);
