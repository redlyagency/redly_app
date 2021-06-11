import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import './fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  body {
    /* styled */
  }
`;
const AppWrapper = styled.div`
  /* styled */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>

      </AppWrapper>
    </>
  );
}

export default App;
