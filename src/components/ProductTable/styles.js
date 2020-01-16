import styled from 'styled-components';

export const Container = styled.div`

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
          background: none;
          margin: 0 5px;
        }
      }
    }

    td:last-child {
      text-align: right;
    }
  }
`;