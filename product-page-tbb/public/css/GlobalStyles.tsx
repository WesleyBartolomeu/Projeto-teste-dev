import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
// font-family: 'Roboto', sans-serif;
// 300;400;500;700

  :root {
    --primary-color: #109CB1;
    --secondary-color: #E74C3C;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;

  }
`;