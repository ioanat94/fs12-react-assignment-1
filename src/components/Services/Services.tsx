import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

function Services() {
  return (
    <section id='services'>
      <SectionTitle title={'Services'} />
      <div className='services__list'>
        <ServiceCard
          number={1}
          title={'Service 1'}
          description={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quis amet nobis quae necessitatibus tenetur esse cumque unde ipsum!'
          }
        />
        <ServiceCard
          number={2}
          title={'Service 2'}
          description={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quis amet nobis quae necessitatibus tenetur esse cumque unde ipsum!'
          }
        />
        <ServiceCard
          number={3}
          title={'Service 3'}
          description={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quis amet nobis quae necessitatibus tenetur esse cumque unde ipsum!'
          }
        />
      </div>
    </section>
  );
}

export default Services;
