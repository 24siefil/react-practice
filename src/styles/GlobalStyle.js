import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

* {
  box-sizing: border-box;
  outline: none;
}

@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap);

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Noto Sans KR', 'sans-serif', 'serif';
  background: ${({ theme }) => theme.colors.grey2};
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;
