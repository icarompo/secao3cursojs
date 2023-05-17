const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num1, , num3, ...rest] = list; //atribuition (with rest operator)
console.log(num1, num3, rest);

//num1 => 1, num3 => 3 and rest => [4, 5, 6, 7, 8, 9, 10]

const list2 = [1, 2, 3];
const list3 = [...list2, ...rest]; //atribuition (with spread operator)
console.log(list3);

//list3 = list1