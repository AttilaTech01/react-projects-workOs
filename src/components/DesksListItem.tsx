import { Fragment } from "react";
//import { GoTrash } from "react-icons/go";
import { Desk } from '../store/store';
//import Button from "./UI/Button";

export interface DesksListItemProps {
    desk: Desk,
    deskChange: (desk: Desk) => void,
}

function DesksListItem({ desk, deskChange }: DesksListItemProps) {
    /*
    const handleDelete = () => {
        console.log('Deleting desk with id : ', desk.id);
    };
    */

    const handleDeskChange = () => {
        deskChange(desk);
    };

    return (
        <Fragment>
            <div className="desks-list-item" onClick={handleDeskChange}>
                {desk.name}
            </div>
        </Fragment>
    );
}

export default DesksListItem;