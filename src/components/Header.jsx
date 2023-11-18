import React from "react";
import {Link} from "react-router-dom";
import classes from "../styles/Header.module.css"
import LogoABR from "../img/logo_ABR.png";
import Popup from "./UI/popup/Popup";
import ButtonLoad from "./UI/buttons/ButtonLoad/ButtonLoad";

const Header = ()=> {
	return(
	<div className={classes.wrapper}>
		<header id="header" className={classes.header}>
			<div className={classes.container}>

				<div className={classes.header__body}>

							<div className={classes.header__logo}>
									<img className={classes.logo__img} id="logo__img" src={LogoABR} />
								<div className={classes.logo__text}>ABRACADABRA</div>
							</div>

					<div className={classes.header__burger}>
							<span></span>
					</div>

						<nav className={classes.header__menu}>
							<ul className={classes.header__list}>
								<li className={classes.header__link}>
									<Link to="/">Главная</Link>
								</li>
								<li className={classes.header__link}>
									<Link to="/services">Услуги</Link>
								</li>
								<li className={classes.header__link}>
									<Link to="/masters">Мастера</Link>
								</li>
								<li className={classes.header__link}>
									<Link to="/price">Цены</Link>
								</li>
								<li className={classes.header__link}>
									<Link to="/courses">Курсы</Link>
								</li>
								<li>
									<ButtonLoad btn={{className: "btn-header",body: "Записаться", href: "#popup"}} />
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