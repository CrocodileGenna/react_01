import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  margin: 10px auto;
  justify-content: center;
`;

export const ListFriends = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CardFriend = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 2px;
  border-radius: 2px;
  width: 130px;
  height: 50px;
  background-color: #0000000a;
  box-shadow: 5px 5px 5px 2px rgb(0 0 0 / 15%);

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #1e25ff21;
    box-shadow: 7px 7px 7px 3px rgb(0 0 0 / 20%);
  }
`;

export const OnlineSpan = styled.span`
  margin: 0 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
// background-color: ${({ online }) => {
//     switch (online) {
//       case true:
//         return 'red';
//       case false:
//         return 'green';
//     }
//   }};
export const PhotoFriend = styled.img`
  width: 40px;
`;

export const NameFriend = styled.p`
  padding: 0 8px;
  font-weight: bold;
  font-size: 16px;
`;
