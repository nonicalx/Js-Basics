//Data
let collection = {
    "2548":{
        "ablum": "The human condition",
        "artist": "jon bellion",
        "tracks":[
            "He is the same",
            "Overwhelming",
            "All time low"
        ]
    },
    "2549":{
        "ablum": "REMA",
        "artist": "Rema",
        "tracks":[
            "Corny",
            "Iron man",
            "why"
        ]
    },
    "2550":{
        "ablum": "KOD",
        "artist": "J cole",
        "tracks":[
            "motiv8",
            "Bracket",
            "Kelvin's Heart"
        ]
    },
    "2551":{
        "ablum": "Yxng Dxnzl",
        "artist": "MI abaga",
        "tracks":[
            "Stop! never second guess yourself",
            "+-",
            "The self evaluation of Yxng Dxnzxl"
        ]
    },
    "2552":{
        "ablum": "Wonder",
        "artist": "Hillsong",
        "tracks":[
            "Wonder",
            "Shadow step",
            "So will I"
        ]
    },
    "2553":{
        "artist": "Zoro",
        "tracks": [
            "stanless"
        ]
    },
    "5324":{
        "album": "Glory sound Prep"
    }
};

// to keep copy of data(collection) for tests
let collectionCopy = JSON.parse(JSON.stringify(collection));

/*
func should update collection and return collection
if value is an empty string the prop is deleted,
if value is give the existing record is replace except for track records which will be appended to existing record.
*/
function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else{
        collection[id][prop] = value;
    }
    return collection;
}


console.log(updateRecords(5324, 'artist','jon bellion'));