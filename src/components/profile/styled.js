import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 10px;


  // height: 250px;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  div {
    margin-right: 20px;
    text-align: center;
  }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-right: 34px;
  }

  a {
    color: #a40000;
    text-decoration: underline;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3, h4 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 20px;
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;