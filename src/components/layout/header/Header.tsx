import scss from "./Header.module.scss";
import logo from "../../../assets/search-line (2).svg";
import { useState } from "react";
const Header = () => {
	const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
	return (
		<header>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div1}>
						<h2>PREMIER</h2>
						<nav>
							<ul>
								<li>Главная</li>
								<li>Все видео</li>
								<li>Live</li>
								<li>Коллекции</li>
							</ul>
						</nav>
					</div>
					<div className={scss.div2}>
						{isInputOpen && (
							<input
								style={{
									width: "200px",
									height: "38px",
									paddingLeft: "10px",
									borderRadius: "8px",
									border: "nome",
                  color: '#fff'
								}}
								type="text"
								placeholder="Кино..."
							/>
						)}
						<img
							onClick={() => setIsInputOpen(!isInputOpen)}
							src={logo}
							alt="logo"
						/>
						<button>Купить подписку за 129P</button>
						<button className={scss.button}>Войти</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
