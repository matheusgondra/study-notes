import { Header } from "../../components/Header";
import { Content } from "./styles";

export function Home() {
	return (
		<>
			<Header />
			<Content>
				<h1>Bem vindo <br />ao <br />Study Notes</h1>

				<button type="button">Fazer login</button>
				<button type="button">Criar conta</button>
			</Content>
		</>
	);
}