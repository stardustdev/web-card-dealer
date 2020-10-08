import React, { memo } from 'react';

import Card from 'src/models/Card';
import CardBackImage from 'src/assets/images/card-back.jpg';

interface IProps {
  width: number;
  card: Card;
}

const CardView: React.FC<IProps> = ({ width, card }: IProps): JSX.Element => {
  return (
    <img
      src={card?.image || CardBackImage}
      style={{ width, height: 1.5 * width }}
      alt={card?.code}
    />
  );
};

const arePropsEqual = (prevProps: IProps, nextProps: IProps): boolean => {
  return prevProps.card?.image === nextProps.card?.image;
};

export default memo(CardView, arePropsEqual);
