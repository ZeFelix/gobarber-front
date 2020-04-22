import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;

  nav {
    align-items: center;
    display: flex;

    img {
      border-right: 1px solid #eee;
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      color: #7159c1;
      font-size: bold;
    }

    aside {
      align-items: center;
      display: flex;
    }
  }
`;

export const Profile = styled.div`
  border-left: 1px solid #eee;
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
