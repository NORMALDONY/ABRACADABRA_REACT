import React, { useState } from "react";
import {Link} from "react-router-dom";
import classes from "../styles/Header.module.css"
import LogoABR from "../img/logo_ABR.png";
import Popup from "./UI/popup/Popup";
import ButtonLoad from "./UI/buttons/ButtonLoad/ButtonLoad";

const Header = ()=> {

	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	}
	const menuClassName = `${classes.header__menu} ${isMenuOpen ? classes.active : ""}`;
	const bodyClassName = `${classes.header__body} ${isMenuOpen ? classes.lock : ""}`;

	return(
	<div className={classes.wrapper}>
		<header id="header" className={classes.header}>
			<nav className={classes.bien__nav}>
				<div className={classes.bien__glass}></div>
					<div className={classes.container}>

						<div className={bodyClassName}>

							<div className={classes.header__logo}>
									<img className={classes.logo__img} id="logo__img" src={LogoABR} />
								<div className={classes.logo__text}>ABRACADABRA</div>
							</div>

							<div className={classes.header__burger} onClick={toggleMenu}>
									<span></span>
							</div>

							<nav className={menuClassName}>
								<ul className={classes.header__list}>
									<li className={classes.header__link}>
										<Link className={classes.header__link} to="/">Главная</Link>
									</li>
									<li className={classes.header__link}>
										<Link className={classes.header__link} to="/services">Услуги</Link>
									</li>
									<li className={classes.header__link}>
										<Link className={classes.header__link} to="/masters">Мастера</Link>
									</li>
									<li className={classes.header__link}>
										<Link className={classes.header__link} to="/price">Цены</Link>
									</li>
									<li className={classes.header__link}>
										<Link className={classes.header__link} to="/courses">Курсы</Link>
									</li>
									<li className={classes.header__link__button}>
										<ButtonLoad btn={{className: "btn-header",body: "Записаться", href: "#popup"}} />
									</li>
								</ul>
							</nav>

						</div>
				</div>
					<div className={classes.bien__glass__edge}></div>
			</nav>
			
		</header>
		<Popup />
	</div>
	);
};

export default Header;