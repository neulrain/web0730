# web0730

오늘 공부한 것
- 배열
- Map, Set객체
- 이터레이터, 제너레이터

추가공부
- 이터레이터, 제너레이터 처음부터 정리하기
- Class와 prototype
- Symbol

<br>


<hr>

  ### 이터레이터와 제너레이터
  
 **순화 가능한 객체 특징**

- ***Symbol.iterator를 갖는다

Symbol.iterator: 인수를 취하지 않고 이터레이터 객체를 반환함.

- 배열, 문자열, Set, Map
- for of문을 사용할 수 있다 ⇒ 일반 객체(객체리터럴)는 for of가 먹히지 않는다.
- 가변 인수를 갖는 함수를 호출할 때 인수로 전달할 수 있다 = 객체가 반환될 필요가 있을때는 언제든지`@@iterator` 메서드는 인수 없이도 호출 할 수 있습니다. 반환된 **iterator**는 반복할 값을 취득하기 위해 사용됩니다.

**이터레이터와 제너레이터**

JavaScript에서 데이터 구조를 순차적으로 탐색하고 종료시의 반환값을 잠재적으로 정의하는 객체., 특히 비동기 프로그래밍 및 메모리 관리에서 유용하게 쓰인다. 

이터레이터는.. 제너레이터의 기반이다.

**이터레이터**

- 데이터 구조를 순회할 수 있는 방법을 제공하고, 필요한 만큼 데이터를 처리할 수 있게 해준다.
- 반복적으로 하나하나 꺼내어 처리 가능한 컬렉션이나 sequence들을 이터레이터 객체라고 한다.
- 이터레이션 결과를 반환하는 next() 메서드를 갖는 객체이다.

**done과 value속성을 갖는 객체**

- done: 아직 순회할 수 있는 요소가 남아잇는지 여부 ⇒ true(없다), false(남아있다)
- value: 요소가 남아있다면 어떤 요소인지 반환한다. ⇒ 순회할 수 있는 현재 요소 반환
- 요소 남아있을 때 : {done: false, value: “다음 값”}
- 요소가 남아있지 않을 때 : {done: true, value: undefined}

```jsx
let arr = [1,2,3,4,5]
const it = arr[Symbol.iterator]();
it.next(); // {value: 1, done: false} => 배열 내부를 한바퀴 돌때까지 작동
```

### next()

순환 가능한 객체의 다음 원소를 반환한다.


**제너레이터(생성자)**

생성자의 next메소드를 호출함으로서 어떤 값이나 작업이 동작하고,  yield문을 만날 때까지 실행된다. yield문은 다음 next()메서드가 입력되기 전까지 진행되지 않는다.

- 생성자 함수는 요청에 따라 그 산출된(yielded, yield식으로 산출된)값을 계산하고, 계산하기 힘든 수열 또는 무한 수열이라도 효율적으로 나타내게 한다.
- 상태를 유지하면서 데이터를 생성할 수 있는 유연성을 제공하며, 비동기 작업을 더 쉽게 처리할 수 있게 해준다.
- 생성자 함수는 원하는 만큼 호출될 수 있고, 매번 새로운 생성자를 반환한다. 하지만 각 생성자는 단 한번만 순회된다.
- 실행이 연속적이지 않은 하나의 함수를 작성함으로 iterative algorithm을 정의할 수 있게 해준다.

yield문의 객체 반환은 이터레이터와 같다( value와 done)

```jsx
function* generate() {
    console.log("제너레이터 실행");
    console.log("1생성");
    yield 1; // next()1회, {value: 1, done: false}
    console.log("2생성");
    yield 2; //next()2회, {value: 2, done: false}
    console.log("3생성");
    yield 3; //next
}
```

while문을 사용하여 제너레이터가 생성한 값을 순회하여 가져오는 예시

```jsx
let gen = generate();
result = gen.next();
while(!result.done){
	console.log(result.value);
	result = gen.next();
```

### 유저 정의 이터레이터

**`Symbol.iterator`** 심볼은 객체에 대응하는 기본 이터레이터를 지정합니다. [`for...of`](https://developer.mozilla.org/ko/docs/docs/Web/JavaScript/Reference/Statements/for...of)와 같이 사용됩니다. ⇒ 독자적으로 이터레이터를 만드는 것

```jsx
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]

```

### Class문법

비슷한 객체를 많이 만들 일이 있을때 사용

신문법인 class 사용시 constructor넣어줘야함.

```jsx
//옛날문법
function 기계(q, w) {
	this.q = q; // this: 기계로부터 생성되는 object들 == instance
	this.w = w;
}

var nunu = new 기계();
// 출력=> 기계{q: "consume", w: "snowball"]

//신규문법
class Hero {
	constructor(){
	this.q = q;
	this.w = w;
	}
}
var nunu = new hero()
```

### prototype문법

클래스에 prototype속성을 지정해주면 그 클래스 자식 모두에게 prototype속성이 물려진다.

이게 되는 이유: 객체에서 속성찾을때 없으면 부모-부모-부모까지도 찾아보기때문

```jsx
기계.prototype.name = 'kim'
nunu.name; // "kim"
Array.prototype.함수 = function(){}
var 어레이 = [4,2,1] // 모든 array에서 사용할 수 있는 함수가 됨
```



### Symbol

- 유일성이 보장되어 유일한 식별자를 만들때 사용한다.
- 특정 위치에 원본을 건들이지 않고 원본을 수정할 수 있다. → 다른 개발자가 만들어놓은 객체 건들이지 않고 내가 원하는 key값 추가가능
- 변경불가능한 유일한 값이며, 같은 이름을 가져도 다른 값을 생성한다. 같은 이름이어도 동일X
- 문자열이 아닌 속성명으로 사용할 수 있는 객체
- Symbol() 함수를 사용하여 생성
- 객체에서 key값을 검색하면 나오진 않지만 Object.getOwnPropertySymbols(user);를 하면 나온다.

```jsx
//다른 개발자가 만들어 놓은 객체
const user = {
	name: "Mike",
	age: 30,
};

//내가 작업
const showName = Symbol("show name");
user[showName] = function () {
console.log(this.name);
};

user[showName]();

//사용자가 접속하면 보는 메세지
for (let key in user) {
console.log(`His ${key} is ${user[key]}.`);
}

```

### Symbol.for() 전역심볼

하나의 심볼만 보장받을 수 있다.

없으면 만들고, 있으면 가져온다.

Symbol함수는 매번 다른 Symbol값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유한다.

```jsx
const id1 = Symbol.for('id')
const id2 = Symbol.for('id');
id1 === id2; // true
```

[Symbol - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

[자바스크립트 중급 강좌 #4 - 심볼(Symbol)](https://youtu.be/E9uCNn6BaGQ?feature=shared)
