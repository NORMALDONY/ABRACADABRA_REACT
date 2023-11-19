import React from "react";
import ServicesTile from "../../components/ServicesTile";
import ButtonLoad from "../../components/UI/buttons/ButtonLoad/ButtonLoad";


import Yura from "./Yura.jpg"
import Nastya from "./NastyaS.jpg"
import Team from "./team.jpg"

import "./Masters.css"

const Masters = ()=> {
	return (
		<div className="masters">
				<div className="master__top">
					<h1>
						Наш опыт, ваше видение: 
						профессиональные, талантливые, 
						дружелюбные тату-мастера
					</h1>
				</div>
				<div className="master__middle">
					<div className="master__team__text">
						<h1>
							Студия ABRACADABRA предлагает индивидуальные татуировки, 
								выполненные одними из самых талантливых художников-татуировщиков, 
								работающих сегодня. Наши художники отобраны вручную за их опыт 
								и профессионализм, с эклектичными стилистическими особенностями 
								и уникальной эстетикой. Каким бы ни было ваше видение, 
								у нас есть мастер, который воплотит его в жизнь.
						</h1>
					</div>
					<div className="team__image">
						<img src={Team}/>
					</div>
				</div>
					<div className="masters__profile">
					<ServicesTile 
								tile={{src: Yura, 
								body: "Юра",
								detail: "Посмотреть работы", 
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								href: "/yura"}} 
					/>
						<ServicesTile 
								tile={{src: Nastya, 
								body: "Настя",
								detail: "Посмотреть работы",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								href: "/nastya"}} 
					/>
					</div>
			</div>
	);
};

export default Masters;