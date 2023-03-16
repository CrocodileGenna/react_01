import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  height: 700px;
  margin: 20px auto;
  border-collapse: collapse;
  background-color: #0000000a;
`;

export const TableHead = styled.thead`
  height: 50px;
  color: #fff;
  background-color: #4dc6fff7;
`;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const TableList = styled.tr`
  transition: all 0.4s ease 0s;

  &:nth-of-type(even) {
    background-color: #00000021;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    color: #fff;
    background-color: #00000090;
  }
`;
