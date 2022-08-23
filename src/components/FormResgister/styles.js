import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 22px;

		label {
			color: white;
			margin-bottom: 9px;
		}

		input {
			width: 180px;
			height: 27px;
			outline: none;
			border: none;
			border-radius: 7px;
			padding: 0 10px;
		}

	}
	button {
		background-color: #1953C7;
		width: 150px;
		height: 35px;
		color: white;
		border-radius: 8px;
		border: none;
		outline: none;
		margin-top: calc(34px - 22px);
		font-size: 18px;
	}
`;