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
								body: "Пирсинг брови"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/ear",
								src: Ear,
								body: "Пирсинг уха"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/lips",
								src: Lips,
								body: "Пирсинг губ"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/microdermal",
								src: MicroDermal,
								body: "Микродермал"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/navel",
								src: Navel,
								body: "Пирсинг Пупка"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/nose",
								src: Nose,
								body: "Пирсинг носа"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/intimate",
								src: Intimate,
								body: "Интимный пирсинг"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/nipples",
								src: Nipples,
								body: "Пирсинг сосков"
							}}
						/>
	
						<ServicesTile
							tile={{
								href: "/tongue",
								src: Tongue,
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