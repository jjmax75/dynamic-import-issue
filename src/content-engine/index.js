import React from "react";
import loadable from "@loadable/component";

import { componentPaths } from "./componentPaths";

const content = {
	rows: [
		{
			componentName: "Image",
			data: {
				src: "img/logo.png"
			}
		},
		{
			componentName: "Link",
			data: {
				href: "http://www.google.ie"
			}
		}
	]
};

const loadComponent = componentName =>
	loadable(() => import(componentPaths[componentName]));

const renderRow = row => {
	const Component = loadComponent(row.componentName);
	return <Component {...row.data} />;
};

const ContentEngine = props => {
	return content.rows.map(row => renderRow(row));
};

export default ContentEngine;
