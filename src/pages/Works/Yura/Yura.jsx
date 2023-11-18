import React from "react";

import classes from "./Yura.module.css";

import YuraS from "./YuraS.png"
import Tower from "./Tower.jpg"
import Cer from "./Cer.jpg"
import Heart from "./Heart.jpg"
import { Carousel } from "../../../components/Carousel";
import WarningCare from "../../../components/WarningCare";

const Yura = ()=> {
	return(
		<div className={classes.works}>
				<div className={classes.works__text}>
					<h1>Работы Юры</h1>
					<p>“Я облокотился на стекляшку, она холодная” - © Юра</p>
				</div>
			<div className={classes.avatar__works}>
				<div><img src={YuraS} /></div>
			</div>
			<div className={classes.works__description}>
				<div className={classes.description}>
					<h1>Lorem ipsum dolor sit amet</h1>
					<div className={classes.description__text}>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti inventore blanditiis placeat beatae, perspiciatis alias, id quisquam repellat itaque deserunt veniam similique autem eligendi minima velit doloribus atque amet fuga.</p>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti inventore blanditiis placeat beatae, perspiciatis alias, id quisquam repellat itaque deserunt veniam similique autem eligendi minima velit doloribus atque amet fuga.</p>
					</div>
				</div>
				<div className={classes.slider__container}>
					<Carousel>
						<img className={classes.item} src={Tower}/>
						<img className={classes.item} src={Cer}/>
						<img className={classes.item} src={Heart}/>
						<img className={classes.item} src={Tower}/>
						<img className={classes.item} src={Cer}/>
						<img className={classes.item} src={Heart}/>
					</Carousel>
				</div>
			</div>
			<WarningCare />
			

		</div>
	);
};

export default Yura;