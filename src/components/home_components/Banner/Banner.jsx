import user from "../../../assets/images/user.png"

const Banner = () => {
    return (
        <div className="bg-[#f1f3ff]">

            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex flex-col justify-center gap-6">

                    <h1 className="text-6xl font-bold leading-snug">
                        One Step <br />
                        Closer To Your <br />
                        <span className="text-[#7E90FE]">Dream Job</span>
                    </h1>

                    <p>
                        Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                    </p>

                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold text-lg px-5 w-36">Get Started</button>

                </div>
                <div>

                    <img src={user} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Banner;