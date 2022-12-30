import './globals.css';
import TextHeader from './TextHeader';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className='h-[100vh] w-[100vw] bg-neutral-800 text-white'>
				<TextHeader />
				{children}
			</body>
		</html>
	);
}
