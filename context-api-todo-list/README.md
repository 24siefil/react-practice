# Features

- `Context API`를 활용하여 `todos` 배열과 관련 코드가 전역적으로 관리된다.
- `todos` 배열은 `useReducer`를 통해 관리된다.
  - `Reducer`는 `CREATE`, `TOGGLE`,` REMOVE` `action.type`을 지원한다.
  - `state Context`와 `dispatch Context`를 분리하여 `dispatch`만 필요한 컴포넌트에서 불필요한 랜더링을 방지한다.
- 새로운 할 일 등록 시 필요한 `nextId`는 `useRef`를 통해 관리된다.

- 컴포넌트에서 `useContext`를 직접 사용하는 대신에, `useContext`를 포함한 `Custom Hook`을 사용한다.

- `TodoItem`, `TodoForm` 컴포넌트는 `React.memo`를 활용하여 리랜더링 관련 성능을 최적화한다.

- `styled-components`를 사용한다.
  - `GlobalStyle`을 사용한다.
  - `styled-normalize`를 사용한다.
  - `ThemeProvider`를 사용한다.
  - 필요에 따라 nested CSS(CSS Selector)를 사용한다.
  - 일부 컴포넌트는 Component Selector를 사용하여 조건에 따라 랜더링 한다.
  
- ES6 문법을 따르며, 함수형 업데이트를 사용한다.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
