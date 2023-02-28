import { OnlineSpan, PhotoFriend, NameFriend } from './FriendList.styled';
import PropTypes from 'prop-types';

export function FriendCard({ avatar, isOnline, name }) {
  return (
    <>
      <OnlineSpan online={isOnline}></OnlineSpan>
      <PhotoFriend src={avatar} alt={name} />
      <NameFriend>{name}</NameFriend>
    </>
  );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
