import { Link } from 'react-router-dom';
import { BlogArticleProps } from '../../types';

function BlogArticle({ img, title, date, summary, link }: BlogArticleProps) {
  return (
    <article className='blogs__article'>
      <img src={require(`../../assets/${img}`)} alt='Article header' />
      <div className='blogs__article-right'>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <p>{summary}</p>
        <Link to={`/articles/${link}`}>Read article →</Link>
      </div>
    </article>
  );
}

export default BlogArticle;
