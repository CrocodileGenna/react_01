import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 320px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 4px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.12) 20%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);

  transition: all 0.4s ease 0s;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.9);
    background: rgb(0, 34, 200);
    background: linear-gradient(
      0deg,
      rgba(0, 34, 200, 0.11808473389355745) 40%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoInCard = styled.img`
  margin-top: 18px;
  width: 130px;
`;

export const UserName = styled.p`
  font-size: 25px;
  font-weight: bold;
  padding: 5px;
`;

export const AdditText = styled.p`
  font-size: 16px;
  padding: 3px;
  color: #00000082;
`;

export const ThisStsts = styled.ul`
  position: absolute;
  bottom: 0%;
  display: flex;
  width: 100%;
  height: 75px;
  padding: 0;
  margin: 0;
  justify-content: space-around;
  background-color: #00000012;
`;

export const ElementInStats = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  transition: all 0.3 ease 0s;
`;

export const LableInStats = styled.span`
  font-size: 16px;
  padding: 3px;
  color: #00000082;
`;

export const QuantityInStats = styled.span`
  font-size: 17px;
  font-weight: bold;
`;
