import React from "react";
import ButtonLoad from "../../components/UI/buttons/ButtonLoad/ButtonLoad";

import "./Home.css";

import Founders__1 from "./img__founders__1.jpg";
import Founders__2 from "./img__founders__2.jpg";
import Team from "./img__founders__3.jpg";
import Studio from "./studio.jpg";
import Tattoo__1 from "./tattoo__1.jpg";
import Video__bg from "./video__bg.webm";

const Home = ()=> {
	return (
	<div>
		<div className="intro">
			<div className="intro__text">
				<div className="intro__content">
				<h1>Опытные художники, искренняя забота, аутентичное искусство</h1>
				<p>Студия ABRACADABRA, предлагает индивидуальные татуировки, которые достоверно рассказывают вашу историю.</p>
				</div>
			</div>
			<video className="video__media" src={Video__bg} autoPlay={true} muted={true} loop={true} />
		</div>

		<div className="img__founders">
			<div className="img__founders__1">
				<img src={Founders__1} />
				<p>Основатели Юрок, Анастасия и их ведущие художники предлагают выдающиеся услуги благодаря таланту, подлинной заботе и многолетнему опыту.</p>
			</div>
			<div className="img__founders__2">
				<img src={Founders__2} />
			</div>
		</div>

		<div className="studio">
			<div className="img__studio">
				<img src={Studio} />
			</div>
			<div className="img__tattoo__1">
				<img src={Tattoo__1} />
			</div>
		</div>
		<div className="studio__text">
			<h1>Расслабьтесь в нашей гигиеничной и гостеприимной тату-студии и будьте собой.</h1>
			<p>Как одна из лучших тату-студий в Рязани, мы предлагаем отличное обслуживание клиентов в непринужденной обстановке.</p>
		</div>

		<div className="team">
			<div className="team__text">
				<h1>Сотрудничайте с нашими талантливыми художниками, чтобы воплотить в жизнь свое уникальное видение.</h1>
				<p>Наши тату-мастера специализируются на различных стилях. Мы стремимся создавать значимое искусство, которое доставит вам удовольствие на всю жизнь. Мы используем традиционные инструменты и новейшие технологии в нашем подходе к индивидуальным татуировкам.</p>
				<div className="button__meet">
					<ButtonLoad btn={{body: "Познакомьтесь с нашими художниками", href: ""}} />
				</div>
				
			</div>
			<div className="img__team">
				<img src={Team}/>
			</div>
		</div>
	</div>
	);
};

export default Home;