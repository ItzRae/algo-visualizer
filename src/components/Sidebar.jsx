import React, { createContext } from "react";
import { TbChevronLeftPipe, TbChevronRightPipe } from "react-icons/tb";
import profile from "./profile.png";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useState, useContext } from "react";
import { sortingAlgoData } from "../lib/utils";
import Modal from "./Modal.jsx";


const SidebarContext = createContext();


export default function Sidebar({ selectedAlgorithm, selectedAlgorithmName, children}) {
    const [expanded, setExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState("About"); // Add state to manage active tab
    const [showModal, setShowModal] = useState(false);

    return ( 
        <>
        <aside className={`h-screen ${expanded? "w-1/4" : ""}`}>
            <nav className="h-full flex flex-col bg-black border-r border-slate-700 shadow-sm text-slate-100">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1 className={`overflow-hidden transition-all text-xl font-weight-200 font-medium`}>
                    { expanded ? selectedAlgorithmName : ""}
                    </h1>
                    <button className="text-white p-1.5 rounded-lg bg-gray-800 hover:bg-gray-900"
                    onClick={() => setExpanded((curr) => !curr)}>
                        { expanded? 
                        <TbChevronLeftPipe size={20}/> 
                        : <TbChevronRightPipe size={20}/> }
                    </button>
                </div>
                {/* <div className="text-left w-full p-3"> dwwd</div> */}
                <div className="h-screen flex justify-end ">
                    {/* SIDEBAR TEXT*/}
                    <div className={`${expanded ? "p-4 pt-2 w-full text-left" : "hidden"} `}>
                        <h1 className="text-center text-xl underline underline-offset-8 pb-4">
                            {expanded ? activeTab : null }
                        </h1>
                        <div className="text-center"> 
                            { (sortingAlgoData[selectedAlgorithm] && activeTab === "About") ? sortingAlgoData[selectedAlgorithm].description : null }

                            {(sortingAlgoData[selectedAlgorithm] && activeTab === "Runtime") && (
                                <p className="text-left bg-purple">
                                    {`Worse Case: ${ sortingAlgoData[selectedAlgorithm].worstCase }\nAverage Case: ${ sortingAlgoData[selectedAlgorithm].averageCase }\nBest Case: ${ sortingAlgoData[selectedAlgorithm].bestCase }`}
                                </p>

                            )}
                            {/* {sortingAlgoData[selectedAlgorithm] && activeTab === "Pseudocode" && <StickyBox>This paragraph will be displayed if showElement is true.</p>} */}
            
                                { sortingAlgoData[selectedAlgorithm] && activeTab === "Pseudocode" ? 
                            
                                showModal && <Modal selectedAlgorithm={selectedAlgorithm} onClose={() => setShowModal(false)}/>: null }
                        </div>
                    </div>
                    {/* SIDEBAR TABS*/}
                    <SidebarContext.Provider value={{expanded, activeTab, setActiveTab, setExpanded, setShowModal}}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                </div>
                <div className="border-t flex p-3 text-white">
                    <img src={profile} className="w-9 h-9 rounded-md"/>
                    <div className={`flex justify-between items-center overflow-hidden ${expanded? 
                        "w-full ml-3" : "w-0"}`}>
                        <div className="leading-4 text-left">
                            <h4 className="font-light">Rachel Lin</h4>
                            <span className="text-xs text-slate-200">raalin25@amherst.edu</span>
                        </div>
                        <FaEllipsisVertical size={25}/>
                    </div>
                </div>
            </nav>
        </aside>
        </>
    )
}

export function SidebarItem( { icon, text, modal}) {
    const {expanded, activeTab, setActiveTab, setExpanded, setShowModal} = useContext(SidebarContext);
    const isActive = activeTab === text;
    
    return (
        <div className={`${expanded? "justify-end flex": ""}`} onClick={() => {setActiveTab(text); setExpanded(true); setShowModal(modal)}}>
            <li className={`relative flex items-center w-14 h-14 justify-center py-1.5 px-3 my-2 font-small rounded-md cursor-pointer transition-colors group ${isActive && expanded ?
            "bg-gradient-to-tr from-sky-950 to-sky-750 text-gray-300" : "text-slate-200 hover:bg-sky-900"}`}>
                {icon}
                {/* <span className={`overflow-hidden transition-all ${expanded? "w-45 ml-3": "w-0"}`}>{text}</span> */}
                
                
                {(!expanded || expanded)&& (
                    <div className={`absolute left-full rounded-md px-1 py-1 ml-6 bg-sky-900 text-gray-100 text-sm
                    invisible opacity-70 -translate-x-3 transition-all group-hover:visible group-hover: opacity-100
                    group-hover: translate-x-0`}>
                        {text}
                    </div>


                )}
            </li>
        </div>
    )
}