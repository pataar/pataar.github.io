import React, { useEffect, useState } from "react";
import { routes } from "../config/routes";

// Import the profile image
import profileImage from "../assets/icon.png";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	useEffect(() => {
		if (isOpen) {
			// Disable body scroll
			document.body.style.overflow = "hidden";
		} else {
			// Re-enable body scroll
			document.body.style.overflow = "";
		}
	}, [isOpen]);

	// Get current path for active state
	const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

	return (
		<div
			className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			<div className="bg-amber-50 dark:bg-amber-900 w-full h-full relative">
				<button
					type="button"
					onClick={onClose}
					className="absolute top-4 right-4 p-3 text-2xl hover:bg-amber-200 dark:hover:bg-amber-700 rounded-md z-50 text-amber-800 dark:text-amber-200"
					aria-label="Close menu"
				>
					×
				</button>

				<nav className="h-full flex flex-col justify-center p-8 pt-20">
					{/* Profile Section */}
					<div
						className={`text-center mb-12 transition-all duration-700 ease-out transform ${
							isOpen ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
						}`}
					>
						<div className="mb-6">
							<img
								src={profileImage.src}
								alt="Pieter's profile"
								width="120"
								height="120"
								className="mx-auto rounded-full object-cover object-top border-4 border-amber-800 shadow-lg w-30 h-30 aspect-square"
							/>
						</div>
						<h2 className="text-xl font-semibold mb-2 text-amber-800 dark:text-amber-200">Pieter Willekens</h2>
						<p className="text-sm opacity-75 italic">Dad, developer and drummer.</p>
					</div>

					{/* Navigation Links */}
					<div className="space-y-6">
						{Object.entries(routes).map(([path, name], index) => {
							const active = currentPath === path;
							const delay = 400 + index * 100;

							return (
								<a
									key={path}
									className={`block text-xl py-3 border-b border-amber-200 dark:border-amber-700 transition-all duration-700 ease-out transform ${
										isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
									} ${
										active
											? "font-bold text-amber-800 dark:text-amber-200"
											: "text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200"
									}`}
									style={{
										transitionDelay: `${delay}ms`,
									}}
									href={path}
								>
									{name}
								</a>
							);
						})}
					</div>
				</nav>
			</div>
		</div>
	);
}
