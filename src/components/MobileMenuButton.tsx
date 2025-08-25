import React, { useState, useEffect } from "react";

interface MobileMenuButtonProps {
	onToggle: (isOpen: boolean) => void;
}

export default function MobileMenuButton({ onToggle }: MobileMenuButtonProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		const newState = !isOpen;
		setIsOpen(newState);
		onToggle(newState);
	};

	return (
		<button
			type="button"
			onClick={handleToggle}
			className="p-2 rounded-md hover:bg-amber-100 dark:hover:bg-amber-800"
			aria-label="Toggle mobile menu"
		>
			<div className={`hamburger-icon ${isOpen ? "active" : ""}`}>
				<span />
				<span />
				<span />
			</div>
		</button>
	);
}
