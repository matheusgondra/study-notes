import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";
import { Content } from "./style";

export function Login() {
	return (
		<>
			<Header />
			<Content>
				<FormLogin />
			</Content>
		</>
	);
}