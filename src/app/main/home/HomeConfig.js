import React from 'react';

const HomeConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: true
				},
				toolbar: {
					display: true
				},
				footer: {
					display: true
				},
				leftSidePanel: {
					display: true
				},
				rightSidePanel: {
					display: true
				}
			}
		}
	},
	routes: [
		{
			path: '/home',
			component: React.lazy(() => import('./Home'))
		}
	]
};

export default HomeConfig;
