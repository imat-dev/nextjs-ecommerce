import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
	children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
	const portalRoot =
		typeof window !== 'undefined'
			? document.getElementById('drawer')
			: null;

	if (!portalRoot) {
		return null; // Return null if the portal root element is not found
	}

	return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;