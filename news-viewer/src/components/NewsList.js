import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import { usePromise } from '../lib/usePromise';
import NewsItem from './NewsItem';

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8411012fb47142279cd198063870bbf3`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중... </NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList;
