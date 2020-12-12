import React, { useEffect } from 'react';
import styled from 'styled-components';
import Character from './Character';
import { Link } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import { useSelector, useDispatch } from 'react-redux'
import { setDataCharaters } from '../redux/Reducers/todosSlice'

const CaruselCharacterStyled = styled.div`
	.carusel-character{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
		gap: 1.5rem;
		justify-content: center;
	}
`

function CaruselCharacter() {
	const dispatch = useDispatch()
	const requetsCharacterList = useGetData();
	useEffect(() => {
		dispatch(setDataCharaters(requetsCharacterList))
	})
	const { dataApi } = useSelector(state => state)

	return (
		<CaruselCharacterStyled>
			<div className="carusel-character">
				{dataApi.characters.length > 0 ?
					dataApi.characters.map(
						(item) => {
							return(
								<Link to={`/${item.id}`} key={item.id}>
									<Character
										image={item.image}
										name={item.name}
									/>
								</Link>
							)
						}
					) : []
				}
			</div>
		</CaruselCharacterStyled>
	)
}

export default CaruselCharacter;