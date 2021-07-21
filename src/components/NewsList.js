// import { PreviousMap } from 'postcss';
import React from 'react'; 

function NewsList({urlToImage, source, author, title, publishedAt, url}){
  return (
  <div>
    <table class="table-fixed">
    <thead>
      <tr>
        <th class="w-1/2 px-4 py-2 bg-gray-300 border">Image</th>
        <th class="w-1/4 px-4 py-2 bg-gray-300 border">Source</th>
        <th class="w-1/4 px-4 py-2 bg-gray-300 border">Author, Title, Date, & URL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border px-4 py-2"><img className="object-contain" src={urlToImage} alt="Article"/></td>
        <td class="border px-4 py-2 text-center">{source}</td>
        <td class="border px-4 py-2 text-left leading-loose">{author}, {title}, {publishedAt}, <a className="bg-gray-500 px-2 py-2 rounded-lg text-xs p-0" href= {url}>Link to article</a></td>
      </tr>
    </tbody>
  </table>
</div>
  );
};

export default NewsList; 