import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  width: 700px;
  margin-top: 80px;
  padding: 16px;

  border-radius: 8px;
  background-color: #fff;

  -webkit-box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);
  -moz-box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);
  box-shadow: 0px 0px 14px -2px rgba(196, 196, 196, 1);

  a {
    width: 56px;
    padding: 8px 0;

    display: flex;
    justify-content: center;

    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    background-color: #222;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

export const Owner = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    margin-bottom: 32px;
  }

  h1 {
    font-size: 32px;
    color: #0d2636;
  }

  p {
    max-width: 400px;
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
    line-height: 1.4;
  }
`;

export const IssuesList = styled.ul`
  width: 100%;
  margin-top: 32px;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;

    width: 100%;
    padding: 16px 12px;

    & + li {
      margin-top: 24px;
    }

    border: 1px solid #222;
    border-radius: 6px;

    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 1);

    img {
      width: 40px;
      height: 40px;
      margin-right: 12px;
      border-radius: 50%;
    }

    div {
      width: 100%;

      .label {
        margin-bottom: 16px;

        a {
          display: flex;
          justify-content: flex-start;

          width: 100%;

          color: #222;
          font-weight: 700;
          background-color: #fff;
          cursor: pointer;

          &:hover {
            color: #0071db;
            text-decoration: underline;
          }
        }

        span {
          padding: 4px 8px;
          margin-right: 12px;
          color: #fff;
          background-color: #222;
          border-radius: 6px;
        }
      }
    }
  }
`;

export const PageActions = styled.div`
  width: 100%;
  margin-top: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 6px 10px;
    color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    background-color: #222;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const FilterList = styled.div`
  margin-top: 32px;

  button {
    padding: 6px 10px;
    margin-right: 12px;

    font-weight: 700;
    outline: 0;
    color: #fff;
    border: none;
    border-radius: 4px;
    background-color: #222;

    &:nth-child(${(props) => props.active + 1}) {
      color: #222;
      border: 1px solid #222;
      background-color: transparent;
    }
  }
`;
