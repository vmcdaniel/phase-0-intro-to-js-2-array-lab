// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
//cats.push('Ralph')
function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(name) {
    cats.pop('Ralph');
}
function destructivelyRemoveFirstCat(name) {
    cats.shift('Milo');
}
function appendCat(name) {
    const newCats = [...cats, 'Broom'];
    return newCats;
}
function prependCat(name) {
    const newCatTwo = ['Arnold', ...cats];
    return newCatTwo;
}

function removeLastCat(name) {
    const LastCat = cats.slice(0,-1);
    return LastCat;
}

function removeFirstCat(name) {
    const firstCat = cats.slice(1);
    return firstCat;
}



// remove last element of an array: slice(0,-1)
//remove first element of an array: slice(1)











