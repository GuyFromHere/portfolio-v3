import React from 'react';

function CardLinks(props) {
        
        return (
            <div id={props.id} className="links">
				<a href={props.url} target="_blank" rel="noopener noreferrer">
					Check it out!
				</a>
				&nbsp;|&nbsp;
				<a href={props.repo} target="_blank" rel="noopener noreferrer">
					Git Hub
				</a>
			</div>
        )
    }

export default CardLinks;