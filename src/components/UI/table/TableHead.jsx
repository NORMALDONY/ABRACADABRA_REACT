import React from "react";

import "../../../pages/Price/Price.css";

const TableHead = (props)=> {
	return(
		<thead>
			<tr>
				<th>{props.table.title}</th>
				<th>Цена</th>
				<th> </th>
			</tr>
		</thead>
	);
};

export default TableHead;