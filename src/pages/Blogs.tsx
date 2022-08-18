import BlogArticle from '../components/BlogArticle/BlogArticle';

function Blogs() {
  return (
    <div>
      <div className='blogs__wrapper'>
        <section className='blogs__title'>
          <h1>Blogs</h1>
        </section>
        <section className='blogs__articles'>
          <BlogArticle
            img={'img-1.jpg'}
            title={'Article 1'}
            date={'01/08/2022'}
            summary={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsum molestiae doloribus aut dignissimos provident harum repellat unde est aperiam quam mollitia quis corporis eligendi cupiditate nulla porro dolorum! Natus.'
            }
            link={'1'}
          />
          <BlogArticle
            img={'img-2.jpg'}
            title={'Article 2'}
            date={'02/08/2022'}
            summary={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsum molestiae doloribus aut dignissimos provident harum repellat unde est aperiam quam mollitia quis corporis eligendi cupiditate nulla porro dolorum! Natus.'
            }
            link={'2'}
          />
          <BlogArticle
            img={'img-3.jpg'}
            title={'Article 3'}
            date={'03/08/2022'}
            summary={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsum molestiae doloribus aut dignissimos provident harum repellat unde est aperiam quam mollitia quis corporis eligendi cupiditate nulla porro dolorum! Natus.'
            }
            link={'3'}
          />
          <BlogArticle
            img={'img-4.jpg'}
            title={'Article 4'}
            date={'04/08/2022'}
            summary={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsum molestiae doloribus aut dignissimos provident harum repellat unde est aperiam quam mollitia quis corporis eligendi cupiditate nulla porro dolorum! Natus.'
            }
            link={'4'}
          />
        </section>
      </div>
    </div>
  );
}

export default Blogs;
