import { Container, Content } from "./styles";
import {	FaTimes,	FaHome, FaGithub } from "react-icons/fa";
import { SidebarItem } from "./components/SidebarItem";
import { Link } from "react-router-dom";

export function Sidebar({ active }) {
	const closeSidebar = () => {
		active(false);
	};

	return (
		<Container sidebar={active}>
			<FaTimes onClick={closeSidebar} />
			<Content>
				<Link to="/">
					<SidebarItem Icon={FaHome} Text="Home" />
				</Link>
				<SidebarItem Icon={FaGithub} Text="Github" />
			</Content>
		</Container>
	);
};