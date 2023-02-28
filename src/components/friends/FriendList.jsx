import { Section, ListFriends, CardFriend } from './FriendList.styled';
import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';

export function FriendList({ friends }) {
  return (
    <Section>
      <ListFriends>
        {friends.map(({ avatar, isOnline, name, id }) => {
          return (
            <CardFriend key={id}>
              <FriendCard avatar={avatar} isOnline={isOnline} name={name} />
            </CardFriend>
          );
        })}
      </ListFriends>
    </Section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
