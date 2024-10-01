import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 800px;

  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > main {
    width: 80%;
    display: flex;
    gap: 16px;    
    
  }
`;