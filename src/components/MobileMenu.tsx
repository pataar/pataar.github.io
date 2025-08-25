import React, { useEffect, useState } from "react";
import { contacts } from "../config/contacts";
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

				<nav className="h-full flex flex-col p-10 pt-24">
					{/* Profile Section - Top */}
					<div className="text-center flex-shrink-0">
						<div className="mb-8">
							<img
								src={profileImage.src}
								alt="Pieter's profile"
								width="160"
								height="160"
								className="mx-auto rounded-full object-cover object-top border-6 border-amber-800 shadow-xl w-40 h-40 aspect-square"
							/>
						</div>
						<h2 className="text-3xl font-semibold mb-3 text-amber-800 dark:text-amber-200">Pieter Willekens</h2>
						<p className="text-lg opacity-75 italic">Dad, developer and drummer.</p>
					</div>

					{/* Navigation Links - Center */}
					<div className="flex-1 flex flex-col justify-center py-16">
						<div className="space-y-12">
							{Object.entries(routes).map(([path, name]) => {
								const active = currentPath === path;

								return (
									<a
										key={path}
										className={`block text-3xl py-6 text-left ${
											active
												? "font-bold text-amber-800 dark:text-amber-200"
												: "text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200"
										}`}
										href={path}
									>
										&gt; {name}
									</a>
								);
							})}
						</div>
					</div>

					{/* Contact Section - Bottom */}
					<div className="flex-shrink-0 pt-10 border-t border-amber-200 dark:border-amber-700">
						<h3 className="text-center text-base font-semibold mb-8 text-amber-800 dark:text-amber-200 uppercase tracking-wider">
							Contact Me
						</h3>
						<div className="flex justify-center space-x-4 flex-wrap gap-y-4">
							{contacts.map(contact => (
								<a
									key={contact.label}
									href={contact.url}
									target="_blank"
									rel="noreferrer"
									aria-label={contact.label}
									className="px-6 py-3 text-base font-medium rounded-lg bg-amber-200 dark:bg-amber-700 text-amber-800 dark:text-amber-200 hover:scale-105 border border-amber-300 dark:border-amber-600"
								>
									{contact.label}
								</a>
							))}
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
