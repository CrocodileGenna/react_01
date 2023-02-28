import {
  ProfileCard,
  Description,
  PhotoInCard,
  UserName,
  AdditText,
  ThisStsts,
  ElementInStats,
  LableInStats,
  QuantityInStats,
} from './Profile.styled';
import PropTypes from 'prop-types';

export function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileCard>
      <Description>
        <PhotoInCard src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <AdditText>{tag}</AdditText>
        <AdditText>{location}</AdditText>
      </Description>
      <ThisStsts>
        <ElementInStats>
          <LableInStats>Followers</LableInStats>
          <QuantityInStats>{followers}</QuantityInStats>
        </ElementInStats>
        <ElementInStats>
          <LableInStats>Views</LableInStats>
          <QuantityInStats>{views}</QuantityInStats>
        </ElementInStats>
        <ElementInStats>
          <LableInStats>Likes</LableInStats>
          <QuantityInStats>{likes}</QuantityInStats>
        </ElementInStats>
      </ThisStsts>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
