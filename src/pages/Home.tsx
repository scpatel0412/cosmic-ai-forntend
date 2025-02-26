import Common from "./Common";

function Home() {
    return (
        <Common>
            <header className="min-h-screen p-8 bg-white">
                <div className="container pt-12 pb-6 mx-auto text-center w-w-full lg:pb-20">
                    <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 !lg:leading-tight mx-auto mb-6 w-full text-3xl !leading-snug lg:max-w-3xl lg:text-5xl">
                        Home Page
                    </h1>
                    <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12 lg:px-12 xl:w-9/12 xl:px-20">
                        Welcome to our restaurant&#x27;s home page. Explore our delicious
                        menu and discover a world of culinary delights.
                    </p>
                    <div className="grid w-full mt-8 place-items-start md:justify-center">
                        <div className="flex flex-col w-full gap-4 mb-2 md:w-11/12 md:flex-row">
                            <div className="relative w-full min-w-[200px] h-11">
                                <input
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                                    placeholder=" "
                                />
                                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                    Enter your email{" "}
                                </label>
                            </div>
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-[12rem]"
                                type="button"
                            >
                                get started
                            </button>
                        </div>
                        <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">
                            I agree the{" "}
                            <a href="#" className="font-medium underline transition-colors">
                                Terms and Conditions
                            </a>
                        </p>
                    </div>
                </div>
                <div className="w-full lg:container lg:mx-auto">
                    <img
                        src="https://unsplash.com/photos/8Gl7Ew-q6D8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG5pZ2h0JTIwYmVhY2h8ZW58MHx8fHwxNzQwMzgzODI0fDA&force=true"
                        alt="credit cards"
                        className=" w-full rounded-lg object-cover"
                    />
                </div>
            </header>
        </Common>
    );
}

export default Home;
