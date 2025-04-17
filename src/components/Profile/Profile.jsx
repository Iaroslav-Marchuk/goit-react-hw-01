import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.pic} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.descr}>{tag}</p>
        <p className={css.descr}>{location}</p>
      </div>
      <ul className={css['profile-list']}>
        <li className={css['profile-item']}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css['profile-item']}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css['profile-item']}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
