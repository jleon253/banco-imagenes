import React from 'react'

const Error = ({msg}) => {
	return (
		<div className='alert alert-danger text-center'>
			{ msg }
		</div>
	)
}

export default Error
