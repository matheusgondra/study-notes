import { Link } from "react-router-dom";

export function Main() {
	return (
		<>
			<h1>
				Bem vindo <br />
				ao <br />
				Study Notes
			</h1>
			<Link to="/login">
				<button type="button">Fazer login</button>
			</Link>
			<Link to="/register">
				<button type="button">Criar conta</button>
			</Link>
		</>
	);
}
