import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    a {
      text-decoration: none;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      background-color: ${theme.colors.lightBg};
    }
  `}

`

export default GlobalStyles
