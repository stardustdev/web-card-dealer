import React, { memo } from 'react';

import User from 'src/models/User';
import AvatarImage from 'src/assets/images/avatar.jpg';

interface IProps {
  width: number;
  user: User;
}

const Card: React.FC<IProps> = ({ width, user }: IProps): JSX.Element => {
  return (
    <img
      className="avatar"
      src={user?.avatar || AvatarImage}
      style={{ width, height: width, borderRadius: width, margin: 10 }}
      alt={user?.name}
    />
  );
};

const arePropsEqual = (prevProps: IProps, nextProps: IProps): boolean => {
  return prevProps.user?.avatar === nextProps.user?.avatar;
};

export default memo(Card, arePropsEqual);
