import React from "react";
import ServicesTile from "../../components/ServicesTile";

import "./Services.css"

import CreateTattoo from "./CreateTattoo.jpg"
import Correction from "./Correction.jpg"
import Permanent from "./Permanent.jpg"
import Design from "./Design.jpg"
import Piercing from "./Piercing.jpg"
import Certificate from "./Certificate.jpg"

const Services = ()=> {
	return (
		<div className="services">
					<h1>Услуги студии ABRACADABRA</h1>
			<div className="services__container">
				<div className="content__container">

					<ServicesTile 
								tile={{src: CreateTattoo, 
								body: "Сделать Тату", 
								href: "/createTattoo"}} 
					/>

					<ServicesTile 
								tile={{src: Correction, 
								body: "Коррекция Тату", 
								href: "/correction"}} 
					/>

					<ServicesTile 
								tile={{src: Permanent, 
								body: "Перманентный макияж", 
								href: "/permanent"}} 
					/>

					<ServicesTile 
								tile={{src: Design, 
								body: "Индивидуальный дизайн", 
								href: "/design"}} 
					/>

					<ServicesTile 
								tile={{src: Piercing, 
								body: "Пирсинг", 
								href: "/piercing"}} 
					/>

					<ServicesTile 
								tile={{src: Certificate, 
								body: "Сертификат", 
								href: "/certificate"}} 
					/>
				</div>
			</div>
			<h2>В студию ABRACADABRA стоит прийти тем, кто мечтает нанести татуировку. Неважно, какие причины привели вас в салон: самовыражение, украшение тела, желание выделиться из толпы – мастера ABRACADABRA всегда выполняют свою работу на высшем уровне. Еще в студии можно перманентный макияж, пройти обучение или сделать пирсинг.</h2>
			</div>
	);
};

export default Services;