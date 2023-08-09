import { createGlobalStyle } from 'styled-components';
import { color } from './color';
import check from '../assets/check.svg';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Pretendard';
    box-sizing: border-box;
  }

  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid ${color.gray300};
    border-radius: 1.5px;
    background: ${color.basicWhite};
    position: relative;

    &:checked {
      background: ${color.primary300};
      border: 1px solid ${color.primary300};

      &::after {
        content: '';
        background-image: url(${check});
        background-size: 13px 10px;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 4px;
        left: 2px;
        width: 12px;
        height: 9px;
      }
    }

    &:disabled {
      background: ${color.gray200};
      border: 1px solid ${color.gray300};
    }

    &:disabled:checked {
      background: ${color.gray300};
    }
  }

  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    position: relative;
    border: 1px solid ${color.borderLine300};
    background: ${color.basicWhite};

    &:checked {
      border: 1px solid ${color.primary300};

      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 12px;
        height: 12px;
        background: ${color.primary300};
        border-radius: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:disabled {
      background: ${color.gray200};
      border: 1px solid ${color.gray300};
    }

    &:disabled:checked {
      background: ${color.basicWhite};

      &::after {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        background: ${color.gray300};
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export default GlobalStyle;
