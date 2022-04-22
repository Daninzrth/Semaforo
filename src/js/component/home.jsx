import React, { useState } from "react";

//create your first component

const Home = () => {
	const [iluminado, setIluminado] = useState(false);
	const [iluminado1, setIluminado1] = useState(false);
	const [iluminado2, setIluminado2] = useState(false);
	const [iluminado3, setIluminado3] = useState(false);
	const [outpurple, setPurple] = useState(true);
	let iluminados = [iluminado, iluminado1, iluminado2];
	function changeIluminado() {
		var random = Math.floor(Math.random() * 3);
		if (iluminados[random]) {
			changeIluminado();
		} else {
			setIluminado(false);
			setIluminado1(false);
			setIluminado2(false);
			if (random == 0) {
				setIluminado(true);
			} else if (random == 1) {
				setIluminado1(true);
			} else if (random == 2) {
				setIluminado2(true);
			}
		}
	}
	const Semaforo = () => {
		return (
			<div>
				<div
					className={iluminado ? "select " : "no"}
					id="redlight"
					onClick={() =>
						setIluminado(true) &
						setIluminado1(false) &
						setIluminado2(false) &
						setIluminado3(false)
					}></div>
				<div
					className={iluminado1 ? "select" : "no"}
					id="yellowlight"
					onClick={() =>
						setIluminado1(true) &
						setIluminado(false) &
						setIluminado2(false) &
						setIluminado3(false)
					}></div>
				<div
					className={iluminado2 ? "select" : "no"}
					id="greenlight"
					onClick={() =>
						setIluminado2(true) &
						setIluminado(false) &
						setIluminado1(false) &
						setIluminado3(false)
					}></div>
			</div>
		);
	};
	return outpurple ? (
		<div className="container py-3">
			<Semaforo />
			<div className="row my-5">
				<button onClick={changeIluminado}> Change! </button>
				<button onClick={() => setPurple(false)}>
					Add Purple light!
				</button>
			</div>
		</div>
	) : (
		<div className="container py-3" style={{ height: "440px" }}>
			<Semaforo />
			<div
				className={iluminado3 ? "select" : "no"}
				id="purplelight"
				onClick={() =>
					setIluminado3(true) &
					setIluminado(false) &
					setIluminado1(false) &
					setIluminado2(false)
				}></div>
			<div className="row my-5">
				<button onClick={() => setPurple(true)}>
					{" "}
					Without Purple!{" "}
				</button>
			</div>
		</div>
	);
};

export default Home;
