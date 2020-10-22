import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.div`
	.character{
		// max-width: 250px;
		border-radius: .3em;
		overflow: hidden;
		background: #fff;
	}
	.character-img{
		width: 100%;
	}
`

function Character({image, name}) {
	return (
		<CharacterStyled>
			<div className="character">
				<img className="character-img" src={image} alt={name} />
				<p className="character-name" >{name}</p>
			</div>
		</CharacterStyled>
	)
}

export default Character;