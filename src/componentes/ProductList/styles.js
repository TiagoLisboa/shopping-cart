import styled from 'styled-components';

export const ProductTable = styled.table`
  width: 100%;

  td {
    padding: 30px;
    border-bottom: 1px solid #eee;
    
    div {
      display: flex;
      align-items: center;

      input {
        border: none;
        width: 30px;
      }
      
      button {
        border: none;
        background: none;
        margin: 0 5px;
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 900px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
`;