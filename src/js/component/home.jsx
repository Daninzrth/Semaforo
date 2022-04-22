import React, { useState } from "react";

//create your first component

const Home = () => {
	const [iluminado, setIluminado] = useState("");
	const [outpurple, setPurple] = useState(true);
	function changeIluminado() {
		var random = Math.floor(Math.random() * 3);
		if (random == 0) {
			setIluminado("rojo");
		} else if (random == 1) {
			setIluminado("amarillo");
		} else if (random == 2) {
			setIluminado("verde");
		}
	}

	const Semaforo = () => {
		return (
			<div>
				<div
					className={iluminado == "rojo" ? "select" : "no"}
					id="redlight"
					onClick={() => setIluminado("rojo")}></div>
				<div
					className={iluminado == "amarillo" ? "select" : "no"}
					id="yellowlight"
					onClick={() => setIluminado("amarillo")}></div>
				<div
					className={iluminado == "verde" ? "select" : "no"}
					id="greenlight"
					onClick={() => setIluminado("verde")}></div>
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
				className={iluminado == "purple" ? "select" : "no"}
				id="purplelight"
				onClick={() => setIluminado("purple")}></div>
			<div className="row my-5">
				<button onClick={() => setPurple(true)}>Without Purple!</button>
			</div>
		</div>
	);
};

export default Home;
