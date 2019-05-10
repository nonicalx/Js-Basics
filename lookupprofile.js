let contacts = [
    {
        "firstName": "Nonso",
        "lastName": "Oranye",
        "number": "08090566550",
        "likes":["pizza","books","coding","Tv shows"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Homes",
        "number": "054464566",
        "likes":["Intrguing cases","smoking pots","violin"]
    },
    {
        "firstName": "Arya",
        "lastName": "Stark",
        "number": "unknown",
        "likes":["shooting arrows","stealing faces","riding with the hound"]
    },
    {
        "firstName": "Sunny",
        "lastName": "",
        "number": "0599405632",
        "likes":["swords","leather jackets","Azra"]
    }
];
/*
function should return value of property passed in.
It should return no such contact when name passed in does not exist
and not such property if property passed in not available.
*/
function lookUpProfile(name, prop){
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName.toLowerCase() === name.toLowerCase()) {
            return contacts[i][prop] || "No such Property";
        }
    }
    return "No such Contact";
}

let data = lookUpProfile("nonso","likes");

console.log(data);