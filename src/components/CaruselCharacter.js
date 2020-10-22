import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import { Link } from 'react-router-dom';
import useGetData from '../hooks/useGetData';

const CaruselCharacterStyled = styled.div`
	.carusel-character{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
		gap: 1.5rem;
		justify-content: center;
	}
`

function CaruselCharacter() {
	const characterList = useGetData();
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