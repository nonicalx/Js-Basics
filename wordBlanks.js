function wordBlanks(noun, adjective, verb, adverb){
    let result = "";
    result = `The ${adjective} ${noun} ${verb} to the store ${adverb}.`

    return result;
}

let sentence = wordBlanks('cat', 'cool','walked','proudly');

console.log(sentence);