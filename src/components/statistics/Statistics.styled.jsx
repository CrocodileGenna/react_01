import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 170px;
  margin: 10px auto;
  border-radius: 4px;

  outline: 1px solid #00000017;
`;

export const TittleStats = styled.h2`
  padding: 35px;
  font-size: 20px;
  color: #00000096;
`;

export const Indexes = styled.ul`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  background-color: #00000012;
`;

export const OneIndex = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.4s ease 0s;

  background-color: ${props => {
    switch (props.label) {
      case '.docx':
        return '#62ff45d1';
      case '.pdf':
        return '#e2ff45d1';
      case '.mp3':
        return '#f92c3fd1';
      case '.psd':
        return '#542cf3d1';
      default:
        return;
    }
  }};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #00000030;
  }
`;
//
export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
