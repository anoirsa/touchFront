

const equals = (variableFirst, variableSecond) => {
    if (variableFirst == variableSecond) return true
    else return false;
}

const getTextLevel = (number) => {
    var returned = "";
    switch(number) {
        case 1 :
            returned = "EASY"
            break;
        case 2 :
            returned = "MEDIUM";
            break;
        case 3 : 
            returned = "DIFFICULT";
            break;  
        default :
            returned = "NOT_VALID"       
    }
    return returned;
}

 const shuffle =(array) => {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

 const insertOptions = (textOptions) => {
     var options = []
     options.push(textOptions.option1)
     options.push(textOptions.option2)
     options.push(textOptions.option3)
     options.push(textOptions.option4);
     return options;

 } 
/** 
const defineClassName = (option , chosenOption, rightAnswer) {
    var 
} 
**/

const getRealScore = (points) => {
    let firstHashMap = new Map([
        [0 , 0],
    ]);

    for (let i = 1 ; i< 17 ; i++) {
        if (i == 1 || i == 2  || i == 3) {
            firstHashMap.set(i , i*100)
        }
        else if (i == 4) {
            firstHashMap.set(i , 500)
        }
        else if (i == 12) {
          firstHashMap.set(i, 125000 )
        }
        else {
            firstHashMap.set(i , firstHashMap.get(i -1) *2)
        }
        
    }
      
    return firstHashMap.get(points)
} 


const points = () => {
    var points = [];
    for (let i = 1 ; i< 17 ; i++) {
        points.push(i);
    }
    return points;
}



const pointStable = (subScore,currentScore) => {
    var submittedScore;
    var alternativePoint = currentScore + 1; 
    // Test 
    console.log("True or false " + equals(currentScore,2))
    if (equals(alternativePoint,5) || equals(alternativePoint,10) || equals(alternativePoint,16)) submittedScore = alternativePoint;
    else submittedScore = subScore;
    return submittedScore;
}

const isStable = (score) =>{
    if ((equals(score,5)) || equals(score,10) || equals(score,16)) return true;
    else return false
} 


function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}


const getIconCategory = (category) =>{
    var returnedValue;
    console.log("category is" + category)
    switch(category) {
        case "SPORTS" :
            returnedValue = "fas fa-baseball-ball";
            break;
        case "ECONOMY" :
            returnedValue = "fas fa-money-check-alt";  
            break;
        case "HISTORY" :
            returnedValue ="fas fa-history";
            break;
        case "POLITICS":
            returnedValue = "fas fa-landmark";
            break;
        case "ARTS" :
            returnedValue = "fas fa-palette";
            break;
        default :
            returnedValue = "fas fa-address-book";
            break;                  
    }
    
    return returnedValue;
} 

export {getTextLevel , shuffle , insertOptions, getRealScore, points, equals, pointStable, removeA , isStable, getIconCategory}
