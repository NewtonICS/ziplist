const zipList = (list1, list2) => {
    let newList = [];
    for(let value of list1){
        newList.push(list1[value-1], list2[value-1]);
    }
    return newList;
};

const zipListTheSimpleWay = (list1, list2) => {return _.flatten(_.zip(list1, list2))};

let oneList = [1, 2, 3];
let twoList = ['a', 'b', 'c'];
console.log(zipList(oneList, twoList));
console.log(zipListTheSimpleWay(oneList, twoList));
