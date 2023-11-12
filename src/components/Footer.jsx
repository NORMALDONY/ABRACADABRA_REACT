import React from "react";

import "../styles/Footer.css"

import LogoABR from "../img/logo_ABR.png"
import Vk from "../img/vk.png"
import Inst from "../img/inst.png"

const Footer = ()=> {
	return (
	<div className="footer">
		<div className="footer__logo">
			<img className="logo__img" src={LogoABR} />
			<div className="footer__logo__text">ABRACADABRA</div>
		</div>
		<div className="footer__contact">
			<h1>Контакты</h1>
			<ul>
				<li>
					г. Рязань, ул. Праволыбедская 50
					с 12:00 до 20:00 без выходных!
				</li>
				<li>
					<a href="tel:+8-900-901-88-16">Тел. 8-900-901-88-16</a>
				</li>
				<li>
					<a href="tel:+4-912-52-72-17">Тел. 52-72-17</a> 
				</li>
			</ul>
			<h1>Социльные сети</h1>
			<div className="social__logo">
				<a href="">
					<img src={Inst} />
				</a>
				<a href="">
					<img src={Vk} />
				</a>
			</div>
		</div>
		<div className="footer_rules">
			<ul>
				<li>
					<h1>Все права защищены ABRACADABRA © 2023 Все права принадлежат: "ООО" PUPOK"серия ЛО-1 №228 Лицензия №228228228</h1>
				</li>
				<li>
					<a href="">Политика конфиденциальности</a>
				</li>
				<li>
					<a href="">Политика конфиденциальности виджета DODIKq</a>
				</li>
			</ul>
		</div>
	</div>
	);
};

export default Footer;