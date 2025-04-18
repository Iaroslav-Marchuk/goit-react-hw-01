import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css['friends-item']}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css['is-online'] : css['is-offline'])}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
