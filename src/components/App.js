import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';
import { TransactionHistory } from './transaction_history/TransactionHistory';
import { GlobalStyle } from './App.styled';
import user from './profile/user/user.json';
import data from './statistics/data/data.json';
import friends from './friends/friends/friends.json';
import transaction from './transaction_history/transaction/transactions.json';

export function App() {
  return (
    <GlobalStyle>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics arrey={data} />
      <FriendList friends={friends} />
      <TransactionHistory props={transaction} />
    </GlobalStyle>
  );
}
