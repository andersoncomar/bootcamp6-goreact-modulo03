import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    font-size: 14px;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex: 1;
`;

export const ButtonAdd = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  border: 1px solid #5cdb95;
  color: #5cdb95;
  font-size: 12px;

  &:hover {
    background: #5cdb95;
    color: #fff;
  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  font-size: 12px;
  margin-left: 15px;
  border: 1px solid #f666;
  color: #f666;

  &:hover {
    background: #f666;
    color: #fff;
  }
`;
