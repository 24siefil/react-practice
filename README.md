## Technical Features

* `Context API`를 활용하여 `todos` 배열과 관련 코드가 전역적으로 관리된다.
* `todos` 배열은 `useReducer`를 통해 관리된다.
  * `Reducer`는 `CREATE`, `TOGGLE`,` REMOVE` `action.type`을 지원한다.
  * `state Context`와 `dispatch Context`를 분리하여 `dispatch`만 필요한 컴포넌트에서 불필요한 랜더링을 방지한다.
* 새로운 할 일을 등록 시 필요한 `nextId`는 `useRef`를 통해 관리된다.

* 컴포넌트에서 `useContext`를 직접 사용하는 대신에, `useContext`를 포함한 `Custom Hook`을 사용한다.

* `TodoItem`, `TodoForm` 컴포넌트는 `React.memo`를 활용하여 리랜더링 관련 성능을 최적화한다.

* `styled-components`를 사용한다.
  * `GlobalStyle`을 사용한다.
  * `styled-normalize`를 사용한다.
  * `ThemeProvider`를 사용한다.
  * 필요에 따라 nested CSS(CSS Selector)를 사용한다.
  * 일부 컴포넌트는 Compoenet Selector를 사용하여 조건에 따라 랜더링 한다.

* ES6 문법을 따르며, 함수형 업데이트를 사용한다.
