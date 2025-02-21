import React, { useEffect, useState } from 'react'
import Sidenav from '@/components/Sidenav'
import { useQuery } from '@tanstack/react-query'
import { conversationChatApi, userConversationApi } from '@/features/api'
import { useParams } from 'react-router-dom';
import moment from 'moment'

function Chat() {

    const { id } = useParams();

    const [showForm, setShowForm] = useState<boolean>(false)

    const { data: conv_data, error: convError, isError: conIsError, isLoading: conisLoading } = useQuery({
        queryKey: ["conversation"],
        queryFn: () => userConversationApi()
    })

    const { data: chat_data, error: chatError, isError: chatIsError, isLoading: chatisLoading, refetch } = useQuery({
        queryKey: ["chat"],
        queryFn: () => conversationChatApi(id ? parseInt(id) : null)
    })

    useEffect(() => {
        const date = moment("Thu Mar 06 2025 00:00:00 GMT+0530 (India Standard Time)");

        const formattedDate = date.format("YYYY-MM-DD");

        console.log(formattedDate);
        if (id) {
            setShowForm(true)
            refetch()
        }
    }, [id])

    console.log(conv_data, chat_data)


    if (conisLoading) {
        return <div>Loading...</div>
    }

    if (conIsError) {
        return <div>Error...</div>
    }


    return (
        <div className='bg-gray-900'>
            <Sidenav conv_data={conv_data} />
            <div className="px-4 sm:ml-64">
                <div className={`w-full ${id ? "px-5" : ""} flex flex-col justify-between`}>
                    <div className="flex flex-col mt-5">
                        {
                            chat_data ? chat_data.data.map((item: any) => {
                                return (
                                    <>
                                        <div className="flex justify-end mb-4">
                                            <div
                                                className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                            >
                                                {item.questions}
                                                <br/>
                                                <span className='font-bold' style={{fontSize:"12px"}}>{moment(item.created_at).format("YYYY-MM-DD HH:MM:SS")}</span>
                                            </div>
                                            <img
                                                src="https://unsplash.com/photos/Fyl8sMC2j2Q/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwMTMxMzc4fA&force=true&w=640"
                                                className="object-cover h-8 w-8 rounded-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex justify-start mb-4">
                                            <img
                                                src="https://unsplash.com/photos/ozVwowRmSwM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwMTMxMjk1fA&force=true&w=640"
                                                className="object-cover h-8 w-8 rounded-full"
                                                alt=""
                                            />
                                            <div
                                                className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                                <br/>
                                                <span className='font-bold' style={{fontSize:"12px"}}>{moment(item.created_at).format("YYYY-MM-DD HH:MM:SS")}</span>
                                                {/* {} */}
                                            </div>
                                        </div>
                                    </>

                                )
                            }) :
                                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
                                    <div className="w-64 h-64 rounded-full bg-blue-500 mb-8 flex items-center justify-center">
                                        <img
                                            src="https://unsplash.com/photos/ozVwowRmSwM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwMTMxMjk1fA&force=true&w=640"
                                            className="object-cover rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className='text-white'>
                                        <h1>CosmicAI</h1>
                                    </div>
                                    <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                        New Chat
                                    </button>
                                </div>
                        }


                    </div>


                    {showForm &&
                        <div className="fixed bottom-0 p-7 w-[81%] box-border bg-gray-900">
                            <input
                                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                                type="text"
                                placeholder="type your message here..."
                            />
                        </div>
                    }



                </div>


            </div>
        </div>
    )
}

export default Chat