import { lazy, Suspense, useEffect, useState } from 'react'

// https://dev.to/palaklive/introducing-dynamic-import-for-react-apps-and-speed-up-development-with-code-splitting-43a1
function Demo() {
	const [name, setName] = useState('')
	const [DynamicComponent, setDynamicComponent] = useState(null)

	useEffect(() => {
		if (name) {
			const Component = lazy(() => import('./' + name + '.jsx'))
			return setDynamicComponent(Component)
		}
		return setDynamicComponent(null)
	}, [name])

	function loadComponent(event) {
		const { value } = event.target
		setName(value)
	}

	return (
		<>
			<Suspense fallback={<div>{'loading...'}</div>}>
				<select value={name} onChange={loadComponent}>
					<option value="">None</option>
					<option value="Hover">Component One</option>
					<option value="Example2">Component Two</option>
					<option value="Example3">Component Three</option>
				</select>
				{DynamicComponent && <DynamicComponent />}
			</Suspense>
		</>
	)
}

export default Demo
