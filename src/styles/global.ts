import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['green-500']};
    }
    body {
        ${({ theme }) => css`
          color: ${theme.colors['gray-100']};
          background: ${theme.colors['gray-800']};
        `};
    }
    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
`
