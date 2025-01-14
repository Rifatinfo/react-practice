
import { useState } from "react";
// import Routings from "./Routings";
import Teacher from './Teacher';
import EvaluationCourse from './EvaluationCourse';
import Evaluation from './Evaluation';
import Preregistration from './Preregistration';
import Schedule from './Schedule';
import Billing from './Billing';
import Result from './Result';
import Profile from './Profile';
import Logout from './Logout';
import Home from "./Home";

const Mains = () => {
    const [isActive, setIsActive] = useState({
        status: "Home",
        cart: true
    })
    const handleIsActive = status => {
        if (status === 'Home') {
            setIsActive({
                status: "Home",
                cart: true
            })
        } else {
            setIsActive({
                status: status,
                cart: false
            })
        }
    }
    const components = {
        Home : <Home></Home>,
        Teacher: <Teacher />,
        EvaluationCourse: <EvaluationCourse />,
        Evaluation: <Evaluation />,
        Preregistration: <Preregistration />,
        Schedule: <Schedule />,
        Billing: <Billing />,
        Result: <Result />,
        Profile: <Profile />,
        Logout: <Logout />,
    };
    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="flex flex-wrap h-12 items-center justify-center text-center gap-1 text-[12px] lg:text-[16px] lg:w-[810px] lg:h-[44px] bg-[#0099cc] nunito text-white lg:font-bold lg:gap-2">
                    {[
                        "Home",
                        "Teacher",
                        "EvaluationCourse",
                        "Evaluation",
                        "Preregistration",
                        "Schedule",
                        "Billing",
                        "Result",
                        "Profile",
                        "Logout",
                    ].map((status) => (
                        <button
                            key={status}
                            className={`${isActive.status === status
                                    ? "text-[#FFE993] scale-110 lg:mb-1 text-[16px]"
                                    : "text-white"
                                }`}
                            onClick={() => handleIsActive(status)}
                        >
                            {status}
                        </button>
                    ))}
                </div>
                {/* Dynamic Component Rendering */}
                <div>
                    {components[isActive.status] || <Logout />}
                </div>
            </div>
        </div>
    );
};

export default Mains;

