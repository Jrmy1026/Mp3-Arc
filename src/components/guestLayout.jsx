import { Outlet } from "react-router-dom";
import arcanaLogo from "../assets/img/web_logo.png";
import { Link } from "react-router-dom";
export default function GuestLayout() {
    return (
        <div className="">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-montserrat">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Link to="/home">
                            <img
                                className="mx-auto h-12 w-auto"
                                src={arcanaLogo}
                                alt="Your Company"
                            />{" "}
                        </Link>
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    );
}
