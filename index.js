// 1st assignment
// add all the count values in res using for loop and console the sum as output.
const res = [
  {
    count: 1,
  },
  {
    count: 2,
  },
  {
    count: 3,
  },
];
var total = 0;
for (let index = 0; index < res.length; index++) {
  total = total + res[index].count;
}
console.log('the sum of count is :' + ' ' + total);

// 2nd assignment
// add all the count values in response using for loop and console the sum as output.
const response = {
  maran: {
    count: 1,
  },
  gas: {
    count: 2,
  },
  prelude: {
    count: 5,
  },
  keys: ['maran', 'gas', 'prelude'],
};

let totalCount = 0;
const calSum =(val)=>{
  totalCount +=val
}
for(let item in response){
  'count' in response[item] && calSum(response[item].count)
}
console.log("the count is "+totalCount)

// 3rd assignment
// change the 'HI' Text color on clicking of button.
document.getElementById("changeColor").onclick = function()
{
  document.getElementById("changeColor").style.color = 'green';
}