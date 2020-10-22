import { useEffect, useState } from 'react';

function useGetData(id) {
	const API = id ? `https://rickandmortyapi.com/api/character/${id}`: 'https://rickandmortyapi.com/api/character/';
	const [data, setData] = useState([]);

	useEffect(() => {
		(async function () {
			try {
				const response = await fetch(API);
				const data = await response.json();
				id ? setData(data) : setData(data.results)
			} catch (err) {
				console.error(err);
			}
		})()
	}, [])
	return data;
}

export default useGetData;