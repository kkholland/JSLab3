const prompt = require('prompt-sync')();

const submissions =[
    {
        name:'Jane',
        score:95,
        date:'2020-01-24',
        passed:true,
    },
    {
        name:'Joe',
        score:77,
        date:'2018-05-14',
        passed:true,
    },
    {
        name:'Jack',
        score:59,
        date:'2019-07-05',
        passed:false,
    },
    {
        name:'Jill',
        score:88,
        date:'2020-04-22',
        passed:true,
    },
];

function addSubmission(array, newName, newScore, newDate) {
    array.push({
        name: newName,
        score: +newScore,
        date: newDate,
        passed: newScore >= 60 ? true: false,
    });
};

addSubmission(submissions, 'Katherine', '100', '2021-02-18');
addSubmission(submissions, 'KK', '59', '2021-02-18');
console.log(submissions);


function deleteSubmissionByIndex(array, index){
    array.splice(index,1);
}

deleteSubmissionByIndex(submissions, 5);
console.log(submissions);


function deleteSubmissionByName(array, name){
    array.splice(array.findIndex(entry=> entry.name === name), 1);
}
deleteSubmissionByName(submissions, 'Jill');
console.log(submissions);


function editSubmission(array, index, score){
    array[index].score = score;
    array[index].passed = score >= 60 ? true: false
}
editSubmission(submissions,1,85);
console.log(submissions);


function findSubmissionByName(array, name){
   return array.find(entry => entry.name === name);
}
console.log(findSubmissionByName(submissions,'Katherine'));

//????????ForEach... How?
// function findLowestScore(array){
//     let min = 100;
//     for (let i=0; i<array.length; i++){
//         if(array[i].score < min){
//             min = array[i].score;
//         }
//     }
        //This works, but cant do it in a forEach....
//     return array.find(entry => entry.score === min);
// }

// This is the second attempt for for each...
function findLowestScore(array){
    let min = array[0].score;
    array.forEach(entry => {
        if(entry.score < min){
            min = entry.score;
        }
    });
    return array.find(entry => entry.score === min);
}
console.log(findLowestScore(submissions));


function findAverageScore(array){
    let sum = 0;
    for (let entry of array){
        sum += entry.score;
    }
    return sum / array.length;
}
console.log(findAverageScore(submissions));


function filterPassing(array){
    return array.filter(entry => entry.passed === true);
}
console.log(filterPassing(submissions));


function filter90AndAbove(array){
    return array.filter(entry => entry.score >= 90);
}
console.log(filter90AndAbove(submissions));


function createRange(start,end){
    let range = [];
    for (i = start; i <= end; i++){
        range.push(i);
    }
    return range;
}
console.log(createRange(2,5));



function countElements(array){
    let object = {};
    for (let key of array){
        // let count = array.filter(entry => entry === key).length;  << Internet says this doenst always work
        let count = 0;
        for (let entry of array){
            if (entry == key){
                count++;
            }
        }
        object[key] = count;
    };
    return object;
}

console.log(countElements(['a', 'b', 'a', 'c', 'a', 'b']));
