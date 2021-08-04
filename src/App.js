import React from 'react'
import Example1 from './components/Example1.jsx'
import Example2 from './components/Example2.jsx'
import Example3 from './components/Example3.jsx'
import Example4 from './components/Example4.jsx'
import Example5 from './components/Example5.jsx'
import Example6 from './components/Example6.jsx'
import Example7 from './components/Example7.jsx'
import Example8 from './components/Example8.jsx'
import Example9 from './components/Example9.jsx'
import Example10 from './components/Example10.jsx'
import Example11 from './components/Example11.jsx'
import Example12 from './components/Example12.jsx'
import RayoutFlexRow from './components/RayoutFlexRow.jsx'
import './App.css'

function App() {
	return (
		<>
			<RayoutFlexRow>
				<RayoutFlexRow.Left>
					<div>left</div>
				</RayoutFlexRow.Left>
				<RayoutFlexRow.Remain>
					<div>remain</div>
				</RayoutFlexRow.Remain>
				<RayoutFlexRow.Right>
					<div>right</div>
				</RayoutFlexRow.Right>
			</RayoutFlexRow>
			<Example1 />
			<Example2 />
			<Example3 />
			<Example4 />
			<Example5 />
			<Example6 />
			<Example7 />
			<Example8 />
			<Example9 />
			<Example10 />
			<Example11 />
			<Example12 />
		</>
	)
}

export default App
