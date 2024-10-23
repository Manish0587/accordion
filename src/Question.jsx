import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
	const [visible,setVisible] = useState(false)
	const changeV = () => {
		setVisible(!visible);
	}
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn" onClick={changeV}>
					{!visible?'+':'-'}
				</button>
			</header>
			{visible && <p>{info}</p>}
		</article>
	)
}

export default Question
