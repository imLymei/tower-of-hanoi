'use client';

import { useState } from 'react';

export default function Home() {
	const [towers, setTowers] = useState([[1, 2, 3, 4, 5], [], []]);
	const [selectedTower, setSelectedTower] = useState();

	function handleTowers(index) {
		if (selectedTower !== undefined) {
			const newTowers = [...towers];
			const newSelectedTower = newTowers[selectedTower];
			const clickedTower = newTowers[index];

			if (newSelectedTower.length <= 0) {
				setSelectedTower(undefined);
				return;
			}

			if (newSelectedTower[0] > clickedTower[0]) {
				setSelectedTower(undefined);
				return;
			}

			const poppedDisc = newTowers[selectedTower].shift();
			newTowers[index].unshift(poppedDisc);

			console.log(newSelectedTower + ' ' + clickedTower + '/ ' + poppedDisc + '/ ' + clickedTower[1]);

			setTowers(newTowers);
			setSelectedTower(undefined);
		} else setSelectedTower(index);
	}

	return (
		<div className='h-[100vh] w-[100vw] flex justify-center items-center'>
			<div className='relative flex justify-center gap-16'>
				{towers.map((towerHeight, index) => (
					<div
						key={index}
						onClick={() => handleTowers(index)}
						className='tower relative px-12 cursor-pointer'>
						<div
							className={
								selectedTower === index
									? 'bg-red-400 line w-1 h-[6rem] translate-x-[-50%]'
									: 'line w-1 h-[6rem] bg-slate-300 translate-x-[-50%]'
							}></div>
						<div className='flex flex-col gap-1 items-center absolute bottom-0 translate-x-[-50%]'>
							{new Array(towerHeight).map((diskArray) =>
								diskArray.map((diskNumber, index) => (
									<div key={index} className='h-3 bg-blue-500' style={{ width: diskNumber * 32 }}></div>
								))
							)}
						</div>
					</div>
				))}
				<div className='absolute left-[44px] top-[100px]'>A</div>
				<div className='absolute top-[100px]'>B</div>
				<div className='absolute right-[46px] top-[100px]'>C</div>
			</div>
		</div>
	);
}
