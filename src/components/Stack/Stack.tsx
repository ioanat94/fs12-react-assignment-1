import SectionTitle from '../SectionTitle/SectionTitle';
import StackIcon from '../StackIcon/StackIcon';

function Stack() {
  return (
    <section id='stack'>
      <SectionTitle title={'Tech Stack'} />
      <div className='stack__tech'>
        <StackIcon abrv={'js'} title={'Javascript'} />
        <StackIcon abrv={'html5'} title={'HTML5'} />
        <StackIcon abrv={'react'} title={'React'} />
        <StackIcon abrv={'sass'} title={'SASS'} />
        <StackIcon abrv={'css3'} title={'CSS3'} />
      </div>
    </section>
  );
}

export default Stack;
