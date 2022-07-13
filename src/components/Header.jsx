import React, {useState, useEffect} from "react";
import MyNavBar from "./NavBar/MyNavBar";
import NavBarMobile from "./NavBar/NavBarMobile";

const Header = () => {
	const [isDesktop, setIsDesktop] = useState(true);

	const checkIsDesktop = () => {
		if (window.visualViewport.width <= 700) {
			setIsDesktop(false);
		} else {
			setIsDesktop(true);
		}
	};

	useEffect(() => {
		checkIsDesktop();
		window.addEventListener("resize", checkIsDesktop);
		return () => window.removeEventListener("resize", checkIsDesktop);
	}, []);

	return isDesktop ? <MyNavBar /> : <NavBarMobile />;
};

export default Header;
