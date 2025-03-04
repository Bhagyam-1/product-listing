import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { IoCloseCircle } from "react-icons/io5";

interface ModalsProps {
    children: ReactNode;
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Modals = ({ children, onClose }: ModalsProps) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <button aria-label="Close Modal" onClick={onClose} className="cursor-pointer">
                    <IoCloseCircle className="h-8 w-8 text-8 absolute top-0 right-0" />
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
}

export default Modals;