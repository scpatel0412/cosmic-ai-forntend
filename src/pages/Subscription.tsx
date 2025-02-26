import { useQuery } from "@tanstack/react-query";
import Common from "./Common"
import { stripeProducts, userProfileApi } from "@/features/api";
import Loader from "@/components/Loader";

function Subscription() {

    const { data, isError, isLoading } = useQuery({
        queryKey: ["subscription"],
        queryFn: () => stripeProducts(),
    });

    const { data: user_data, isError: userIsError, isLoading: userIsLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => userProfileApi(),
    });

    console.log(data, user_data, 'data')

    if (isLoading && userIsLoading) {
        return <Loader />
    }

    if (isError || userIsError) {
        return <div>Something went Wrong ...</div>
    }

    return (
        <Common>
            <div className="">
                <div>
                    <h2 className="text-3xl font-bold tracki text-center mt-12 sm:text-5xl ">Pricing</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Get started on our free plan and upgrade when you are
                        ready.</p>
                </div>
                <div className="mt-24 mx-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold ">Free</h3>
                            <p className="mt-4 flex items-baseline ">
                                <span className="text-5xl font-extrabold tracking-tight">$0</span><span className="ml-1 text-xl font-semibold">/month</span>
                            </p>
                            <p className="mt-6 ">You just want to discover</p>
                            <ul role="list" className="mt-6 space-y-6">
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">10 Credits</span></li>
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">Generate video (2 credits)</span></li>
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">Quizz (1 credits) </span></li>
                            </ul>
                        </div><button
                            disabled={true}
                            className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                        >Current</button>
                    </div>
                    {data && data.data.map((item: any) => {
                        return (
                            <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold ">{item.name}</h3>
                                    <p
                                        className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                                        Most popular</p>
                                    <p className="mt-4 flex items-baseline ">
                                        <span className="text-5xl font-extrabold tracking-tight">${Number(item.price_details.unit_amount / 100) || null}</span><span className="ml-1 text-xl font-semibold">/{item.price_details.recurring.interval}</span>
                                    </p>
                                    <p className="mt-6 ">You want to learn and have a personal assistant</p>
                                    <ul role="list" className="mt-6 space-y-6">
                                        <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><span className="ml-3 ">30 credits</span></li>
                                        <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><span className="ml-3 ">Powered by GPT-4 (more accurate)</span></li>
                                        <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><span className="ml-3 ">Generate video (2 credits)</span></li>
                                        <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><span className="ml-3 ">Quizz (1 credits) </span></li>
                                        <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><span className="ml-3 ">Analytics on the quizz</span></li>
                                    </ul>
                                </div>
                                <button
                                    type="button"
                                    disabled={user_data.subscriptions.length > 0 ? true : false}
                                    onClick={() => {
                                        console.log(item)
                                    }}
                                    className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                                >{user_data.subscriptions.length > 0 ? 'You are already subscribed' : 'Click here to add this product '}</button>
                            </div>
                        )
                    })}

                </div>

            </div>
        </Common>
    )
}

export default Subscription