import { ServiceCardProps } from '../../types';

function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className='services__service'>
      <h3 id={`srv-${number}`}>{title}</h3>
      <p>{description}</p>
      <button aria-labelledby={`srv-${number}`}>Select</button>
    </div>
  );
}

export default ServiceCard;
