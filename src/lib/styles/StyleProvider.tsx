import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import './Pretendard/pretendard.css';
import './Roboto/roboto.css';

const PoinTStyleProvider = ({
  children,
  theme,
}: {
  children?: JSX.Element | JSX.Element[] | string;
  theme?: { [key: string]: string };
}) => {
  return (
    <ThemeProvider theme={theme ? theme : {}}>
      <GlobalStyle />
      {Array.isArray(children) ? children.map((e) => e) : children}
    </ThemeProvider>
  );
};

export default PoinTStyleProvider;
