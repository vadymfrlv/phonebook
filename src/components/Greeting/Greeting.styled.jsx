import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 170px);
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 120px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #fff;
  text-shadow: 8px 8px rgba(0, 21, 255, 0.5), 0px 0px 0px rgba(0, 21, 255, 0.5);
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.15em;
  text-align: center;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.676);
`;
