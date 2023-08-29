import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const AuthenticatedButton: React.FC<{ name: string | null }> = (props) => {
	const [showSubMenu, setShowSubMenu] = useState(false);

    const subMenuClass = showSubMenu ? "absolute" : "hidden";
	const toggleSubMenu = () => {
		setShowSubMenu(!showSubMenu);
	};
    
    const signOutHandler = () => {
        signOut();
    }



	return (
		<div>
			<button
				onClick={toggleSubMenu}
				className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
			>
				Hi, {props.name}
				<svg
					className="w-2.5 h-2.5 ml-2.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>
			<div
				id="dropdown"
				className={`${subMenuClass} z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
			>
				<ul
					className="py-2 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownDefaultButton"
				>
					<li>
						<a
							href="#"
							className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Settings
						</a>
					</li>
					<li>
						<a
							href="#"
							onClick={signOutHandler}
							className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AuthenticatedButton;
