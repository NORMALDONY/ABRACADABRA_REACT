import React from "react";
import Master from "../../components/Master";

import Yura from "./Yura.jpg"
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
						<Master 
							master= {{
								src: Yura,
								name: "Юра",
								description: "Юрок — основатель, владелец и старший художник ABRACADABRA. Он опирается на почти двадцатилетний опыт работы в отрасли, татуируя новых клиентов и обучая нашу отобранную вручную команду художников.",
								link: "",
								linkText: "",
							}}
						/>
						<Master 
							master= {{
								src: Yura,
								name: "Юра",
								description: "Юрок — основатель, владелец и старший художник ABRACADABRA. Он опирается на почти двадцатилетний опыт работы в отрасли, татуируя новых клиентов и обучая нашу отобранную вручную команду художников.",
								link: "",
								linkText: "",
							}}
						/>
						<Master 
							master= {{
								src: Yura,
								name: "Юра",
								description: "Юрок — основатель, владелец и старший художник ABRACADABRA. Он опирается на почти двадцатилетний опыт работы в отрасли, татуируя новых клиентов и обучая нашу отобранную вручную команду художников.",
								link: "",
								linkText: "",
							}}
						/>
					
					</div>
			</div>
	);
};

export default Masters;