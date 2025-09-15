import { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

export default function MobileMenuContainer() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = (isOpen: boolean) => {
		setIsMenuOpen(isOpen);
	};

	const handleMenuClose = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			{/* Mobile header */}
			<div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-b border-amber-200 dark:border-amber-700 p-4">
				<div className="flex justify-end items-center">
					<MobileMenuButton onToggle={handleMenuToggle} />
				</div>
			</div>

			{/* Mobile menu */}
			<MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
		</>
	);
}
