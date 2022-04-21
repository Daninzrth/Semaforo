import React, { useState } from "react";

//create your first component
const Home = () => {
	const [iluminado, setIluminado] = useState(false);
	const [iluminado1, setIluminado1] = useState(false);
	const [iluminado2, setIluminado2] = useState(false);

	return (
		<div className="container py-3">
			<div
				className={iluminado ? "select " : "no"}
				id="redlight"
				onClick={() =>
					setIluminado(true) &
					setIluminado1(false) &
					setIluminado2(false)
				}></div>
			<div
				className={iluminado1 ? "select" : "no"}
				id="yellowlight"
				onClick={() =>
					setIluminado1(true) &
					setIluminado(false) &
					setIluminado2(false)
				}></div>
			<div
				className={iluminado2 ? "select" : "no"}
				id="greenlight"
				onClick={() =>
					setIluminado2(true) &
					setIluminado(false) &
					setIluminado1(false)
				}></div>
		</div>
	);
};

export default Home;
