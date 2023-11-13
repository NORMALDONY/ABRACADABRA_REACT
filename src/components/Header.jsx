import React from "react";
import {Link} from "react-router-dom";
import "../styles/Header.css"
import LogoABR from "../img/logo_ABR.png";
import Popup from "./UI/popup/Popup";
import ButtonLoad from "./UI/buttons/ButtonLoad/ButtonLoad";

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
								<li className="header__link">
									<Link to="/">Главная</Link>
								</li>
								<li className="header__link">
									<Link to="/services">Услуги</Link>
								</li>
								<li className="header__link">
									<Link to="/masters">Мастера</Link>
								</li>
								<li className="header__link">
									<Link to="/price">Цены</Link>
								</li>
								<li className="header__link">
									<Link to="/courses">Курсы</Link>
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