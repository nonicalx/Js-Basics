//array of nickname of how far the stroke is from the hole
const nicknames = ['Hole-in-one!','Eagle','Birdie','Par','Bogey','Double Bogey','Go Home!'];

function golfScore(par, strokes){
    if (strokes == 1) {
        return nicknames[0];
    } else if(strokes <= par -2){
        return nicknames[1];
    }else if (strokes == par -1){
        return nicknames[2]
    }else if(strokes == par){
        return nicknames[3]
    }else if (strokes == par + 1) {
       return nicknames[4]
    }else if (strokes == par+2) {
        return nicknames[5]
    }else if (strokes >= par + 3) {
        return nicknames[6]
    }
}

console.log(golfScore(1,5));