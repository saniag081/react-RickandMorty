import React from 'react';
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
	dispatch(setDataCharaters(requetsCharacterList))
	const characterList = useSelector(state => state.characters)
	return (
		<CaruselCharacterStyled>
			<div className="carusel-character">
				{
					characterList.map(
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
					)
				}
			</div>
		</CaruselCharacterStyled>
	)
}

export default CaruselCharacter;