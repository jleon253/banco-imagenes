import React from 'react'

const Imagen = ({ imagen }) => {
	const { largeImageURL, likes, tags, type, user, previewURL } = imagen
	return (
		<div className='card'>
			<img src={previewURL} className='card-img-top img-fluid' alt={tags} />
			<ul className='list-group list-group-flush'>
				<li className='list-group-item'>
					<small>
						<b>Etiquetas: </b>
						{tags}
					</small>
				</li>
				<li className='list-group-item'>
					<small>
						<b>Tipo: </b>
						{type}
					</small>
				</li>
				<li className='list-group-item'>
					<small>
						<b>Autor: </b>
						{user}
					</small>
				</li>
				<li className='list-group-item'>
					<small>
						<b>Likes: </b>
						{likes}
					</small>
				</li>
			</ul>
			<div className='card-body'>
				<a
					href={largeImageURL}
          target='_blank'
          rel="noopener noreferrer"
					className='btn btn-link btn-block'
				>
					Ver en tamaño completo
				</a>
			</div>
		</div>
	)
}

export default Imagen
