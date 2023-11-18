import React, { Children, cloneElement, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "../styles/Carousel.css";

const PAGE_WIDTH = 600;

export const Carousel = ({ children }) => {
	const [pages, setPages] = useState([])
	const [offset, setOffset] = useState([])
	const [currentPage, setCurrentPage] = useState([])


	const handleLeftArrowClick = ()=> {
		setOffset((currentOffset) => {
			let newOffset;
			let newPage;
			if (currentOffset >= 0) {
				newOffset = -1 * (PAGE_WIDTH * (pages.length -1));
				newPage = pages.length -1;
			}
			else {
				newOffset = currentOffset + PAGE_WIDTH;
				newPage = Math.min(currentPage - 1, pages.length - 1);
			}
			
			setCurrentPage(newPage);
			return Math.min(newOffset, 0);
		})
	}

	const handleRightArrowClick = ()=> {
		setOffset((currentOffset) => {
			let newOffset;
			let newPage;
			if (currentOffset <= -1 * (PAGE_WIDTH * (pages.length -1))) {
				newOffset = 0;
				newPage = 0;
			}
			else {
				newOffset = currentOffset - PAGE_WIDTH;
				newPage = Math.max(currentPage + 1, 0);
			}
			
			setCurrentPage(newPage);
			const maxOffset = -(PAGE_WIDTH * (pages.length -1));

			return Math.max(newOffset, maxOffset);
		})
	}

	useEffect(() => {
		setPages(
			Children.map(children, child => {
				return cloneElement(child, {
					style: {
						height: "100%",
						maxWidth: `${PAGE_WIDTH}px`,
						minWidth: `${PAGE_WIDTH}px`
					},
				})
			})
		)
	},[])
	
	return(
		<div>
				<div className="main-container">
				<FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
				<div className="window">
					<div className="all-pages-container"
						style={{
							transform: `transLateX(${offset}px)`
						}}
					>{pages}</div>
				</div>
				<FaChevronRight className="arrow" onClick={handleRightArrowClick} />
			</div>
			<div className="radio-buttons">
			{pages.map((page, index) => (
				<input
					key={index}
					type="radio"
					name="carousel-radio"
					checked={currentPage === index}
					onChange={() => setCurrentPage(index)}
					disabled
				/>
			))}
		</div>
		</div>
	);
};
