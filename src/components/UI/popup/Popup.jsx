import React from "react";
import ButtonLoad from "../buttons/ButtonLoad/ButtonLoad";

import "./Popup.css"

import Vk from "./vk.png";
import Inst from "./inst.png";

const Popup = ()=> {
	return(
		<div id="popup" className="popup">
				<a href="#wrapper" className="popup__area"></a>
				<div className="popup__body">
					<div className="popup__content">
						<a href="#wrapper" className="popup__close"><span>X</span></a>
						<div className="popup__title">
							<h1 className="popup__title__h1">Записаться на сеанс</h1>
							<h2 className="popup__title__h2">*Работаем только по предварительной записи</h2>
						</div>
						<div className="popup__contact">
							<h1 className="popup__contact__h1">Контакты</h1>
										<p>г. Рязань, ул. Праволыбедская 50 с 12:00 до 20:00 без выходных!</p>
											<a href="tel:+8-900-901-88-16">Тел. 8-900-901-88-16</a>
								
							<h1 className="popup__contact__h1">Социльные сети</h1>
						<div className="social__logo">
							<a href="">
								<img src={Inst} alt="" />
							</a>
							<a href="">
								<img src={Vk} alt="" />
							</a>
						</div>
						<div className="popup__buttons">
							<ButtonLoad btn={{className: "btn-header",body: "Уход", href: ""}} />
							<ButtonLoad btn={{className: "btn-header",body: "Противопоказания", href: ""}} />
						</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Popup;