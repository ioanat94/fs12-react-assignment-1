import BlogArticle from '../BlogArticle/BlogArticle';
import SectionTitle from '../SectionTitle/SectionTitle';

function Blogs() {
  return (
    <section id='blogs'>
      <SectionTitle title={'Blogs'} />
      <a href='/blogs'>See all blogs →</a>
      <div className='blogs__bloglist'>
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
      </div>
    </section>
  );
}

export default Blogs;
