import React, { useState } from "react";
import { bingo } from "../../../api/BINGO";

const BingoMain = ({ id }) => {
	const [currentBingo, setCurrentBingo] = useState(
		bingo.find((elem) => elem.id === id),
	);
	return <div>{currentBingo.title}</div>;
};

export default BingoMain;
