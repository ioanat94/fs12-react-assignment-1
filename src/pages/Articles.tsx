import { useParams } from 'react-router-dom';

function Articles() {
  const params = useParams();
  const number = params.articleId;

  return (
    <div className='article__wrapper'>
      <section className='article__title'>
        <h1>Article {number}</h1>
        <h4>0{number}/08/2022</h4>
      </section>
      <section className='article__content'>
        <img
          src={require(`../assets/img-${number}.jpg`)}
          alt='Article header'
        />
        <h2>Subheading 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          delectus harum doloribus repellendus eum ipsam voluptatibus sed
          repudiandae officiis, quo soluta magnam iure, consequatur totam illo
          pariatur saepe, amet obcaecati!
        </p>
        <h2>Subheading 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          delectus harum doloribus repellendus eum ipsam voluptatibus sed
          repudiandae officiis, quo soluta magnam iure, consequatur totam illo
          pariatur saepe, amet obcaecati!
        </p>
      </section>
    </div>
  );
}

export default Articles;
