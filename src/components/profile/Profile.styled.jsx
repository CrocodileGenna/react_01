import styled from "@emotion/styled";

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
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #ff676712;
    box-shadow: 0px 0px 12px 6px rgba(0, 0, 0, 0.35);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoInCard = styled.img`
  border-radius: 50%;
  margin-top: 18px;
  width: 130px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.3 ease 0s;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  }
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
