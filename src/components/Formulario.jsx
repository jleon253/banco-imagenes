import React, { useState } from 'react'
import Error from './Error'

const Formulario = ({ setBusqueda }) => {
	const [termino, setTermino] = useState('')
	const [error, setError] = useState(false)

	const buscarTermino = (e) => {
		e.preventDefault()
		// validar termino
		if (termino.trim() === '') {
			setError(true)
			return
		}
		setError(false)
		// Enviar termino a componente principal
		setBusqueda(termino.replace(' ', '+'))
	}

	return (
		<form onSubmit={buscarTermino}>
			<div className='row'>
				<div className='col-12'>
					{error ? <Error msg='Ingresa un termino para buscar' /> : null}
				</div>
				<div className='form-group col-12 col-sm-8 col-md-8 col-lg-8'>
					<label>Palabra a buscar:</label>
          <input
						type='text'
						className='form-control'
						placeholder='Ej: gatos'
						onChange={(e) => setTermino(e.target.value)}
          />
          <small className="form-text text-muted">Puedes escribir en español o ingles.</small>
				</div>
				<div className='form-group col-12 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center'>
					<button type='submit' className='btn btn-primary btn-block'>
						Buscar
					</button>
				</div>
			</div>
		</form>
	)
}

export default Formulario
