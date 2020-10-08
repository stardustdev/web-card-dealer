import React, { memo } from 'react';

interface IProps {
  width: number;
  imageSource: string;
}

const Card: React.FC<IProps> = ({
  width,
  imageSource,
}: IProps): JSX.Element => {
  return (
    <img src={imageSource} style={{ width, height: 1.5 * width }} alt="Card" />
  );
};

const arePropsEqual = (prevProps: IProps, nextProps: IProps): boolean => {
  return prevProps.imageSource === nextProps.imageSource;
};

export default memo(Card, arePropsEqual);
