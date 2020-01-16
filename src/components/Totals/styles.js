import styled from 'styled-components';

export const Container = styled.div`

  table {
    width: 100%;
    table-layout: fixed;

    border-bottom: 1px solid #eee;

    td {
      padding: 20px;
    }

    tr.total {
      font-weight: bold;
    }
  }
`;