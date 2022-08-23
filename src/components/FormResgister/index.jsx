import { Form } from "./styles";

export function FormRegister() {
	return (
		<>
			<Form
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<div>
					<label htmlFor="login">Username</label>
					<input type="text" id="login" />
				</div>
				<div>
					<label htmlFor="password">Senha</label>
					<input type="text" id="password" />
				</div>
				<div>
					<label htmlFor="password">Confirmar senha</label>
					<input type="text" id="password" />
				</div>

				<button type="submit">Cadastrar</button>
			</Form>
		</>
	);
}