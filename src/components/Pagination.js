import React from 'react'; 

function Pagination({ resultsPerPage, totalResults, paginate }) {
  const pageNumbers = []; 

  for(let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i); 
  }
  return (
    <div className="py-2">
      <ul className="flex pl-0 rounded list-none flex-wrap">
        {pageNumbers.map(number => (
          <li className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid 
          border-blueGray-500 bg-white text-blueGray-500" key={number}>
            <a onClick={() => paginate(number)}href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ); 
}; 

export default Pagination; 