import { FriendListItem } from '../friendListItem/friendListItem';
import css from './friendList.module.css';
export const FriendList = ({ friendList }) => {
  return (
    <ul className={css.friendList}>
      {friendList.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
