import React, { memo } from 'react';

interface IProps {
  width: number;
  imageSource: string;
}

const Card: React.FC<IProps> = ({
  width,
  imageSource,
}: IProps): JSX.Element => {
  return <></>;
};

export default memo(Card);
