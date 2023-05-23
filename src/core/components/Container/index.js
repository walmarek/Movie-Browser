import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto 0px;
  max-width: 1368px;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.max}) {
    margin: 0px 16px 32px 16px;
  }
`;
