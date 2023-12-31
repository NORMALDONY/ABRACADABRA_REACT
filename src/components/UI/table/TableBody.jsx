import React from "react";
import ButtonLoad from "../buttons/ButtonLoad/ButtonLoad";

import "../../../pages/Price/Price.css";

const TableBody = (props)=> {
	return(
		<tbody>
			<tr>
				<td>{props.table.name}</td>
				<td>{props.table.price}</td>
				<td>
					<div style={{
						display: "flex",
						justifyContent: "center"
					}}>
						<ButtonLoad btn={{className: "btn-white",body: "Посмотреть примеры работ", href: ""}}/>
					</div>
				</td>
			</tr>
		</tbody>
	);
};

export default TableBody;