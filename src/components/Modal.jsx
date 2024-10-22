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
                <button  classname='place-self-end' onClick={onClose} color="black"><X size={30}/></button>
                <h1 className="text-black text-center text-2xl font-semibold">{sortingAlgoData[selectedAlgorithm].name} Pseudocode</h1>
                <CodeInterface text={sortingAlgoData[selectedAlgorithm].pseudocode}/>
            </div>
        </div>
    )
}