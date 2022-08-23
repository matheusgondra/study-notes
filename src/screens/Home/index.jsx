import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Content } from "./styles";

export function Home() {
	return (
		<>
			<Header />
			<Content>
				<Main />
			</Content>
		</>
	);
}