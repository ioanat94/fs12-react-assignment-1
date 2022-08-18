import { StackIconProps } from '../../types';

function StackIcon({ abrv, title }: StackIconProps) {
  return (
    <div className='stack__icon'>
      <i className={`fab fa-${abrv}`} aria-hidden='true' title={title}></i>
      <span className='fa-sr-only'>{title}</span>
    </div>
  );
}

export default StackIcon;
