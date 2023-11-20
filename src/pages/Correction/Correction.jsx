import React from "react";
import PageTemplate from "../../components/PageTemplate";
import correction from "./Correction.jpg"

const Correction = ()=> {
	return(
		<div>
			<PageTemplate pageTemplate= {{
				title: "Перекрытие или исправление тату",
				image: correction,

				textMain: "Старый рисунок был набит непрофессиональным мастером или за прошедшие годы утратил свою актуальность? Татуировку можно перекрыть или исправить. Но в данном случае нужно понимать, что перекрытие или исправление тату – более сложная работа, чем создание нового рисунка.",
				list_1: "Нужно подобрать эскиз так, чтобы новая работа по размеру закрывала старую. Это означает, что ваша татуировка будет больше, чем предыдущая – к этому стоит быть готовым.",
				list_2: "Цвет новой тату будет темнее и насыщеннее – невозможно спрятать темный пигмент под более светлым. Выбирая рисунок, ориентируйтесь на насыщенные цвета.",
				totalMain: "В общем, перекрыть старую татуировку получится только более объемным и красочным рисунком. Мастера нашей тату-студии разработают для вас эскиз новой тату так, чтобы полностью «спрятать» старый рисунок. Также татуировкой перекрывают шрамы и другие дефекты на коже. Цена перекрытия тату зависит от размера и сложности работы.",

				titleBot: "Выбирайте профессионалов своего дела",
				textBot: "Вы еще не сделали выбор? Мы поможем вам определиться – талант наших мастеров и качественная аппаратура гарантируют качественное нанесение рисунка любой сложности. Пора сделать первый шаг и разрешить себе немного больше, чем могут другие. Способны ли вы принять решение?",
			}}
			/>
		</div>
	);
};

export default Correction;