import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;

  table {
    width: 100%;
    table-layout: fixed;

    border-bottom: 1px solid #eee;

    td {
      padding: 20px;
      
      div {
        display: flex;
        align-items: center;

        input {
          border: none;
          width: 30px;
        }
        
        button {
          border: none;
          background-color: #ff3333;
          color: #fff;
          font-weight: bold;
          padding: 10px;
          margin: 0 5px;
        }
      }
    }
  }
`;