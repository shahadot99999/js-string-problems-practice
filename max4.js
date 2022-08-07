// Homework: 1
// write a function that will take 3 numbers will return the max number // first time do it using if-else
//maximum number
const jim = 69;
const dela = 97;
const chinku = 99;
function maxNumber() {
    if (jim > dela && jim > chinku) {
        console.log('Jim will get the  cake');
    }
    else if (dela > jim && dela > chinku) {
        console.log('Dela will eat cake in this bela');
    }
    else {
        console.log('Chinku will get maximum the cake');
    }
    return;
}
maxNumber();

// Write a function that will take 3 parameters and will return the min number //// first time do it using if-else
//minimumnumber
// const jim = 69;
// const dela = 97;
// const chinku = 99;
function minimumNumber(jim, dela, chinku) {
    if (jim < dela && jim < chinku) {
        console.log('Jim will get minimum the cake');
    }
    else if (dela < jim && dela < chinku) {
        console.log('Dela will eat cake in this bela');
    }
    else {
        console.log('Chinku will get the cake');
    }
    return;
}
minimumNumber(69, 97, 99);