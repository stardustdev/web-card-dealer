import React, { memo } from 'react';

import AvatarView from 'src/components/Avatar';
import CardView from 'src/components/Card';
import Card from 'src/models/Card';
import User from 'src/models/User';
import './styles.css';

interface IProps {
  user: User;
  cardInfo: Card;
  cardWidth: number;
  avatarWidth: number;
}

const Player: React.FC<IProps> = ({
  user,
  avatarWidth,
  cardInfo,
  cardWidth,
}: IProps): JSX.Element => {
  return (
    <div className="player">
      <AvatarView width={avatarWidth} user={user} />
      <CardView width={cardWidth} card={cardInfo} />
    </div>
  );
};

const areEqualProps = (prevProps: IProps, nextProps: IProps): boolean => {
  return (
    prevProps.user?.name === nextProps.user?.name &&
    prevProps.user?.avatar === nextProps.user?.avatar &&
    prevProps.cardInfo?.image === nextProps.cardInfo?.image
  );
};

export default memo(Player, areEqualProps);
