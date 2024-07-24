import { ReactNode, useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

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
            <div className="expandable-panel-header" onClick={handleClick}>
                <div>
                    {header}
                </div>
                <div>
                    {expanded ? <GoChevronDown /> : <GoChevronRight /> }
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