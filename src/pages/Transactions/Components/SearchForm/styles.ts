import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['gray-900']};
    color: ${({ theme }) => theme.colors['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors['green-300']};
    color: ${({ theme }) => theme.colors['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors['green-500']};
      border: 1px solid ${({ theme }) => theme.colors['green-500']};
      color: ${({ theme }) => theme.colors.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
