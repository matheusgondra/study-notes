import { Container, Content } from "./styles";
import {	FaTimes,	FaHome, FaGithub } from "react-icons/fa";
import { SidebarItem } from "./components/SidebarItem";

export function Sidebar({ active }) {
	const closeSidebar = () => {
		active(false);
	};

	return (
		<Container sidebar={active}>
			<FaTimes onClick={closeSidebar} />
			<Content>
				<SidebarItem Icon={FaHome} Text="Home" />
				<SidebarItem Icon={FaGithub} Text="Github" />
			</Content>
		</Container>
	);
};