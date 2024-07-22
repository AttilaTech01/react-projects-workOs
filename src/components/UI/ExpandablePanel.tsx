import { ReactNode, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export interface ExpandablePanelProps {
    header: ReactNode,
    children: ReactNode
}

function ExpandablePanel({ header, children }: ExpandablePanelProps) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div>
                <div>
                    {header}
                </div>
                <div onClick={handleClick}>
                    {expanded ? <GoChevronDown /> : <GoChevronLeft /> }
                </div>
            </div>
            {expanded && 
                <div>
                    {children}
                </div>
            }
        </div>
    );
}

export default ExpandablePanel;