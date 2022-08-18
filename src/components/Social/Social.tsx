import { SocialProps } from '../../types';

function Social({ img, title }: SocialProps) {
  return <img src={require(`../../assets/${img}`)} alt={`${title} icon`} />;
}

export default Social;
