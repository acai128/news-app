import Axios from 'axios';
import React, { useEffect, useState }from 'react'; 
import NewsListHeading from './components/NewsListHeading';
import NewsList from './components/NewsList'; 
import Pagination from './components/Pagination';

function SearchBar() {
  const [searchInput, setSearchInput] = useState(''); 
  const [results, setResults] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [resultsPerPage] = useState(10); 

  const API_Key = `${process.env.REACT_APP_API_KEY}`; 

  useEffect(() => {
    const getResults = async () => {
      const res = await Axios.get(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${API_Key}&pageSize=100`); 
      setResults(res.data.articles)
      console.log(res.data.articles)
    }; 
    getResults(); 
  
  }, [searchInput]); 

  // Get current results
  const indexOfLastResult = currentPage * resultsPerPage; 
  const indexOfFirstResult = indexOfLastResult - resultsPerPage; 
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult) 

  //Change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <div className="text-3xl font-extrabold text-center p-10 bg-gray-600 text-white"  > 
      <NewsListHeading heading="News Search"/>
      </div>
      <input
        className="w-full rounded ml-1 flex border-black border p-2 mb-10"
        value={searchInput}
        placeholder="Type to search"
        onChange={(event) => setSearchInput(event.target.value)}
      >
      </input>
      <div className="grid-cols-3 gap-4">
        {currentResults.map(({ urlToImage, source, author, title, publishedAt, url }) => (
          <NewsList 
          urlToImage={urlToImage} 
          source={source.name}
          author={author} 
          title={title} 
          publishedAt={publishedAt} 
          url={url}
          />
        ))}
      </div>
      <div>
      <Pagination resultsPerPage={resultsPerPage} totalResults={results.length} paginate={paginate}/>
      </div>
    </div>
  );
};

export default SearchBar; 