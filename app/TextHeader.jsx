function TextHeader() {
	return (
		<div className='absolute top-16 left-1/2 translate-x-[-50%] text-center'>
			<h1 className='text-4xl p-2'>Tower of Hanoi</h1>
			<h2 className='p-2'>~Rules~</h2>
			<div className='text-left max-w-xl'>
				<p>
					* Only <span className='text-red-500 hover:underline underline-offset-2'>one disk</span> can be
					moved at a time.
				</p>
				<p>
					* Each move consists of taking the{' '}
					<span className='text-red-500 hover:underline underline-offset-2'>upper disk</span> from one of the
					stacks and placing it{' '}
					<span className='text-red-500 hover:underline underline-offset-2'>on top</span> of another stack. In
					other words, a disk{' '}
					<span className='text-red-500 hover:underline underline-offset-2'>can only be moved</span> if it is
					the <span className='text-red-500 hover:underline underline-offset-2'>uppermost disk</span> on a
					stack.
				</p>
				<p>
					* <span className='text-red-500 hover:underline underline-offset-2'>No larger disk may</span> be
					placed on top of a{' '}
					<span className='text-red-500 hover:underline underline-offset-2'>smaller disk</span>.
				</p>
				<p>
					* Move all the disk from pilar{' '}
					<span className='text-red-500 hover:underline underline-offset-2'>A</span> to{' '}
					<span className='text-red-500 hover:underline underline-offset-2'>C</span>
				</p>
			</div>
		</div>
	);
}

export default TextHeader;
