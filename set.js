// const set = new Set();
// console.log(set);

// const set1 = new Set([1,2,3,3]);
// console.log(set1);

// const uniq = array => [...new Set(array)];
// console.log(uniq([2,1,2,3,4,3,5,4]));

// const size = new Set([1,2,3,3]);
// console.log(size);

// const set = new Set();
// set.add(1).add(2);
// console.log(set)

// const set = new Set([1,2,3]);
// console.log(set.delete(2));
// console.log(set);

// let odds = new Set([1,3,5,7,9]);
// let sum = 0;
// for(let o of odds)
//     sum += o;
// console.log(sum);

// let product = 1;
// odds.forEach(o => product *= 0);
// console.log(product)


// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach(userID => {
//     console.log(`ID: userID`);
// });

// const tages = ['JavaScript', 'css', 'HTML', 'HTML'];
// const uniqueTags = new set(tags);
// uniqueTags.forEach(tag => {
//     console.log(`tag: ${tag}`)
// })


// const set = new Set([1,2,3])
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest)

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 3, 2]);
// let union = new Set([...set1, ...set2]) //중복이 없어짐
// console.log(union)
// let intersection = new Set([...set1].filter(x => set2.has(x))); //중복인것만 필터
// console.log(intersection);
// let difference = new Set([...set1].filter(x => !set2.has(x))); //중복이 아닌 것만 필터
// console.log(difference)

//변환하지 않고 .size로 간단히 알 수 있다.
// let set3 = Array.from(new Set("I am a student"));
// console.log(set3)
// console.log(set3.length)

// const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(map1);

// const map2 = new Map([[1, 2]]); //이터러블을 인수로 전달받아 Map객체를 생성하기때문.
// console.log(map2);

// const map = new Map([['key1', 'value1'], ['key1', 'value2']]); //키가 중복되면 덮어써진다.
// console.log(map);

// const {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(size);
// const map = new Map();
// map.set('key1', 'value1').set('key2', 'value2');
// console.log(map)

// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'kim'};

// map.set(lee, 'developer').set(kim,'designer');
// map.clear();
// console.log(map);

// let map = new Map();
// map.set(0, "zero"); // cjtqjsWo dlstnsms 
// map.set(1, "one");
// map.forEach((value, key) => console.log(key, value));


let average;
let sum = 0;

const scores = new Map([['국어', 85], ['영어', 90], ['수학', 95]]);
scores.forEach((value, key) => sum += value);

average = (sum / scores.size)
console.log(sum)
console.log(average)

const inspect = new Map([['title', '유럽 책방 문화 탐구'], ['author', '한미화'], ['price', 23000]]);
inspect.forEach((value, key) => console.log(key + ": " + value));

const a = new Set([3,7,12,3,12,3]);
console.log(a)