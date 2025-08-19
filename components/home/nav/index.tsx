import { navlinks } from "@/data/navlinks";
import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<div className="font-open-sans flex justify-between items-center px-10 py-5">
			<div className="flex-1 flex items-center gap-6">
				{navlinks.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						className="text-sm text-gray-700 hover:text-gray-900"
					>
						{link.name}
					</Link>
				))}
			</div>
			<div className="flex-1 text-center">Luxe Rides</div>
			<div className="flex-1 flex justify-end items-center gap-4">
				<div className="flex items-center gap-2">
					<span className="text-sm">Login</span>
					<span className="text-sm">Sign Up</span>
				</div>
			</div>
		</div>
	);
};

export default Nav;
