import { Form } from "./styles";

export function FormLogin() {
	return (
		<>
			<Form
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<div>
					<label htmlFor="login">Login</label>
					<input type="text" id="login" />
				</div>
				<div>
					<label htmlFor="password">Senha</label>
					<input type="text" id="password" />
				</div>

				<button type="submit">Entrar</button>
			</Form>
		</>
	);
}