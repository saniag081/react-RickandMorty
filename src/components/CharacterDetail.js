import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import { useDispatch, useSelector } from 'react-redux'
import { detailCharater } from '../redux/Reducers/todosSlice'

const CharacterDetailStyled = styled.div`
	.character-detail{
		max-width: 800px;
		margin: auto;
		display: grid;
		align-items: center;
		grid-template-columns: 250px minmax(300px, 500px);
		gap: 1.5rem;
    justify-content: space-around;
	}
	.character-detail-img{
		width: 100%
	}
	.character-detail-info{
		font-size: 20px;
		padding: .5rem 1.5rem;
		box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
		border-radius: 5px;
	}
`

function CharacterDetail() {
	const dispatch = useDispatch()
	const { id } = useParams();
	const requestDataCharacter = useGetData(id);
	useEffect(() => {
		dispatch(detailCharater(requestDataCharacter))
	})
	const { dataApi } = useSelector(state => state)
	const dataCharacter = dataApi.detailCharater
	return (
		<CharacterDetailStyled>
			<div className="character-detail">
				<div>
					<img className="character-detail-img" src={dataCharacter.image} alt={dataCharacter.name} />
					<h2>{dataCharacter.name}</h2>
				</div>
				<div className="character-detail-info">
					<p>Episodes: <span></span></p>
					<p>Status: <span>{dataCharacter.status}</span></p>
					<p>Species: <span>{dataCharacter.species}</span></p>
					<p>Gender: <span>{dataCharacter.gender}</span></p>
					<p>Origin: <span>{ dataCharacter.origin?.name }</span></p>
					{/* <p>Origin: <span>{ dataCharacter.origin ? dataCharacter.origin.name : '' }</span></p> */}
					{/* <p>Last Location: <span>{dataCharacter.location.name}</span></p> */}
				</div>
			</div>
		</CharacterDetailStyled>
	)
}

export default CharacterDetail;