import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 16px;
  margin: 80px auto;

  border-radius: 8px;

  h1 {
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 600px;
  padding: 16px;
  margin-top: 24px;

  border-radius: 8px;
  background-color: #fff;

  -webkit-box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);
  -moz-box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);
  box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);

  input {
    width: calc(100% - 40px);
    height: 32px;
    padding: 16px;
    margin-left: 8px;

    border-radius: 4px;
    border: 1px solid ${(props) => (props.error ? '#FF0000' : '#ddd')};
  }

  div {
    margin-top: 16px;
  }
`;

const animate = keyframes`
from{
  transform: rotate(0deg)
}

to{
  transform: rotate(360deg)
}
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  width: 32px;
  height: 32px;

  border: 0;
  border-radius: 4px;
  background-color: #fc0404;

  &:hover {
    background-color: #ac1c34;
    svg {
      transform: scale(1.2);
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  width: 600px;
  padding: 16px;
  margin-top: 24px;

  border-radius: 8px;
  background-color: #fff;

  -webkit-box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);
  -moz-box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);
  box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);

  list-style: none;
  margin-top: 16px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;

    & + li {
      border-top: 1px solid #c3c3c3;
    }

    a {
      color: #222;
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: 'button',
})`
  margin-right: 12px;
  border: 0;
  outline: 0;
  background: transparent;

  &:hover {
    transform: scale(1.2);
  }
`;
