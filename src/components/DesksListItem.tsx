import { Fragment } from "react";
//import { GoTrash } from "react-icons/go";
import { Desk } from '../store/store';
import Button from "./UI/Button";

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
            <Button className="desks-list-item" loading={false} onClick={handleDeskChange}>
                {desk.name}
            </Button>
        </Fragment>
    );
}

export default DesksListItem;