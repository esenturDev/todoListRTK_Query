import { Cards } from "../pages/cards/Cards";
import TodoList from "../pages/todoList/TodoList";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export const Layout = () => {
	return (
		<div className={scss.layout}>
			<Header />
			<main>
        <TodoList/>
        <Cards/>
      </main>
			<Footer />
		</div>
	);
};
