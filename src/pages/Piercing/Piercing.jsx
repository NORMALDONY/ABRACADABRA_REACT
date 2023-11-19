import React from "react";

import ServicesTile from "../../components/ServicesTile";
import WarningCare from "../../components/WarningCare";

import classes from "./Piercing.module.css";

import MaksS from "./MaksS.jpg"
import Brow from "./brow.jpg"
import Ear from "./ear.jpg"
import Lips from "./lips.jpeg"
import MicroDermal from "./microDermal.jpg"
import Navel from "./navel.jpg"
import Nose from "./nose.jpg"
import Intimate from "./intimate.jpg"
import Nipples from "./nipples.jpg"
import Tongue from "./tongue.jpg"

const Piercing = ()=> {
	 return(
			<div className={classes.works}>
					<div className={classes.works__text}>
						<h1>Работы Максима</h1>
						<p>“Засуну в вас всякие штучки-дрючки” - © Максим</p>
					</div>
					<div className={classes.avatar}>
						<div><img src={MaksS} /></div>
					</div>
	
				<div className={classes.gallery__container}>
					<div className={classes.gallery}>
						<ServicesTile
							tile={{
								href: "/brow",
								src: Brow,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Пирсинг брови"
								
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/ear",
								src: Ear,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Пирсинг уха"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/lips",
								src: Lips,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Пирсинг губ"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/microdermal",
								src: MicroDermal,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Микродермал"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/navel",
								src: Navel,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Пирсинг Пупка"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/nose",
								src: Nose,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Пирсинг носа"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/intimate",
								src: Intimate,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Интимный пирсинг"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/nipples",
								src: Nipples,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Пирсинг сосков"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/tongue",
								src: Tongue,
								detail: "Подробнее",
								text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, a. Eum, omnis mollitia, recusandae, enim doloremque modi ea ipsam aliquam laudantium tempore repudiandae eaque voluptatem numquam quo ex sed magni?",
								body: "Пирсинг языка"
							}}
						/>
				</div>
			</div>
				<WarningCare />
		</div>
	 );
};

export default Piercing;