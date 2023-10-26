import React from 'react';
import "../Search/Search.css";

const Search = () => {
	return (
		<>
		 <div className="search">
			  <input type='text' placeholder='도서명 | SBN | 대여자명을 입력해주세요.'/>
			  <i class="fa-solid fa-magnifying-glass"></i>
		 </div>
		</>
	  );
	}

export default Search;