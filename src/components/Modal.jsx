import React from "react";
import CodeInterface from "./CodeInterface";
import { sortingAlgoData } from "../lib/utils";
import { X } from "lucide-react";

export default function Modal({onClose, selectedAlgorithm}) {
    const modalRef = React.useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="flex flex-col w-1/2 h-1/2 bg-white">
                <button  classname='place-self-end' onClick={onClose}><X size={30}/></button>
                <CodeInterface text={sortingAlgoData[selectedAlgorithm].pseudocode}/>
            </div>
        </div>
    )
}