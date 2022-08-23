import { FormRegister } from "../../components/FormResgister";
import { Header } from "../../components/Header";
import { Content } from "./style";

export function Register() {
	return (
		<>
			<Header />
			<Content>
				<FormRegister />
			</Content>
		</>
	);
}