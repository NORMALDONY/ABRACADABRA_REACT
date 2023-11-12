import React from "react";
import "../styles/Header.css"
import LogoABR from "../img/logo_ABR.png";
import Popup from "./UI/popup/Popup";
import ButtonLoad from "./UI/buttons/ButtonLoad/ButtonLoad";
import ButtonsNav from "./UI/buttons/ButtonNav/ButtonNav";

const Header = ()=> {
	return(
	<div className="wrapper">
		<header id="header" className="header">
			<div className="container">

				<div className="header__body">

							<div className="header__logo">
									<img className="logo__img" id="logo__img" src={LogoABR} />
								<div className="logo__text">ABRACADABRA</div>
							</div>

					<div className="header__burger">
							<span></span>
					</div>

						<nav className="header__menu">
							<ul className="header__list">
								<li>
									<ButtonsNav btn={{body: "Главная", href: ""}}/>
								</li>
								<li>
									<ButtonsNav btn={{body: "Услуги", href: ""}}/>
								</li>
								<li>
									<ButtonsNav btn={{body: "Мастера", href: ""}}/>
								</li>
								<li>
									<ButtonsNav btn={{body: "Цены", href: ""}}/>
								</li>
								<li>
									<ButtonsNav btn={{body: "Курсы", href: ""}}/>
								</li>
								<li>
									<ButtonLoad btn={{body: "Записаться", href: "#popup"}} />
								</li>
							</ul>
						</nav>

				</div>
			</div>
		</header>
		<Popup />
	</div>
	);
};

export default Header;