import React from 'react'
import './searchbox.scss'

const SearchBox = (props) => {
	return (
		<div className='searchBox'>
			<input
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Nhập tên Phim'
			></input>
		</div>
	);
};

export default SearchBox