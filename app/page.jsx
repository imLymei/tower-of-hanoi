'use client';

import { useState } from 'react';

export default function Home() {
	const [towers, setTowers] = useState([[1, 2, 3, 4, 5], [], []]);
	const [selectedTower, setSelectedTower] = useState();
	const [win, setWin] = useState(false);

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

			if (clickedTower.length === 5) setWin(true);
		} else setSelectedTower(index);
	}

	return (
		<div className='max-sm:relative bottom-[-30vh]'>
			<div className='h-[100vh] w-[100vw] flex justify-center items-center'>
				<div className='relative flex justify-center flex-col sm:flex-row gap-16'>
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
										<div key={index} className='h-3 bg-sky-700' style={{ width: diskNumber * 32 }}></div>
									))
								)}
							</div>
						</div>
					))}
					<div className='absolute left-[44px] top-[100px]'>A</div>
					<div className='absolute max-sm:left-[44px] top-[260px] sm:top-[100px]'>B</div>
					<div className='absolute left-[44px] sm:left-[373px] top-[420px] sm:top-[100px]'>C</div>
					<h1
						className='absolute text-4xl top-[-140px] sm:top-[-60px] max-sm:whitespace-nowrap max-sm:translate-x-[-15%]'
						style={win ? { opacity: 1 } : { opacity: 0 }}>
						You <span className='text-red-500'>Won</span>!
					</h1>
				</div>
				<button
					className='absolute bottom-[2vh] max-sm:mb-6 sm:bottom-[20vh] border border-white px-6'
					onClick={() => {
						setTowers([[1, 2, 3, 4, 5], [], []]);
						setSelectedTower(undefined);
						setWin(false);
					}}>
					Restart
				</button>
			</div>
		</div>
	);
}
