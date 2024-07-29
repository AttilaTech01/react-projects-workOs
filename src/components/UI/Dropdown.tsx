import { useRef, useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import useOutsideClick from '../../hooks/useOutsideClick';
import Button from './Button';

export interface DropdownItem {
    id: string;
    name: string;
}
  
export interface DropdownProps {
    id: string;
    title?: string;
    data: DropdownItem[];
    onSelect?: (id: string) => void;
}

function Dropdown({
    id,
    title = "Select",
    data,
    onSelect,
  }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>();

    const dropdownRef = useRef<HTMLDivElement>(null);
    useOutsideClick({
        ref: dropdownRef,
        handler: () => setIsOpen(false),
    });

    const handleChange = (item: DropdownItem) => {
        setSelectedItem(item);
        onSelect && onSelect(item.id);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className="dropdown">
            <Button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedItem?.name || title}</span>
                {isOpen ? <GoChevronDown /> : <GoChevronRight />}
            </Button>
            {isOpen && (
                <div aria-label='Dropdown menu'>
                    <ul
                    role='menu'
                    aria-labelledby={id}
                    aria-orientation='vertical'
                    className="dropdown-content"
                    >
                    {data?.map((item) => (
                        <li
                        key={item.id}
                        onClick={() => handleChange(item)}
                        >
                            <span>{item.name}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            )}
        </div>
      );
}

export default Dropdown;

