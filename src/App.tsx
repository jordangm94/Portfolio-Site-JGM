import React from 'react';
import Cards from './components/profileCard';

function App() {
	return (
		<div className="bg-black flex">
			<div className="flex flex-row overflow-visible">
				<Cards />
			</div>
		</div>
	);
}

export default App;
