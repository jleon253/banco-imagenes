import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import ListaImagenes from './components/ListaImagenes'
import Spinner from './components/Spinner/Spinner'

function App() {
	const [busqueda, setBusqueda] = useState('')
	const [imagenes, setImagenes] = useState([])
	const [paginaActual, setPaginaActual] = useState(1)
	const [totalPaginas, setTotalPaginas] = useState(1)
	const [cargando, setCargando] = useState(false)

	useEffect(() => {
		if (busqueda === '') return
		setImagenes([])
		setCargando(true)
		const consultarAPI = async () => {
			const ll = '17102576-721f7fd7bd4bac153e82eddfa'
			const perPage = 12
			const url = `https://pixabay.com/api/?key=${ll}&q=${busqueda}&per_page=${perPage}&page=${paginaActual}`
			const respuesta = await fetch(url)
			const resultado = await respuesta.json()
			setImagenes(resultado.hits)
			// calcular el total de paginas a mostrar
			setTotalPaginas(Math.ceil(resultado.totalHits / perPage))
			setCargando(false)
		}
		setTimeout(() => {
			consultarAPI()
		}, 500)
	}, [busqueda, paginaActual])

	const irAnterior = () => {
		setImagenes([])
		const nuevaActual = paginaActual - 1
		if (nuevaActual === 0) return
		setPaginaActual(nuevaActual)
	}
	const irSiguiente = () => {
		setImagenes([])
		const nuevaActual = paginaActual + 1
		if (nuevaActual > totalPaginas) return
		setPaginaActual(nuevaActual)
	}

	return (
		<div className='container'>
			<div className='jumbotron'>
				<p className='lead text-center'>
					<b>Banco de imagenes con Pixabay API</b>
				</p>
				<Formulario setBusqueda={setBusqueda} />
			</div>
			{cargando ? <Spinner /> : null}
			{imagenes.length === 0 ? null : (
				<div className='row'>
					<div className='col-12'>
						<h5>
							Pagína {paginaActual} de {totalPaginas}{' '}
						</h5>
						<hr />
					</div>
					<ListaImagenes imagenes={imagenes} />
					<div className='col-12 d-flex flex-column flex-md-row justify-content-md-around'>
						{paginaActual === 1 ? null : (
							<button
								type='button'
								className='btn btn-secondary my-2'
								onClick={irAnterior}
							>
								&laquo; Anterior
							</button>
						)}
						{paginaActual === totalPaginas ? null : (
							<button
								type='button'
								className='btn btn-secondary my-2'
								onClick={irSiguiente}
							>
								Siguiente &raquo;
							</button>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default App
