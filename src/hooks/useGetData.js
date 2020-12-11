import { useEffect, useState } from 'react';

function useGetData(id) {
	const urlBase = 'https://rickandmortyapi.com/api/character';
	const API = id ? `${urlBase}/${id}` : urlBase;
	const [data, setData] = useState(id ? {} : []);

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
	}, [id, API])
	return data;
}

export default useGetData;