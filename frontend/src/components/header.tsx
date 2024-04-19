import { Link } from "react-router-dom";
import MobileNav from "./mobilenav";
import MainNav from "./mainnav";

const Header = () => {
    return(
        <div className="border-b-2 border-b-orange-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold tracking-light text-orange-500">
                    Food.ORG
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="hidden md:block"><MainNav /></div>
            </div>
        </div>
    )
}

export default Header;