import { Fragment } from "react";
import { GoTrash } from "react-icons/go";
import { Desk } from '../store/store';
import Button from "./UI/Button";
import ExpandablePanel from "./UI/ExpandablePanel";
import FoldersList from "./FoldersList";

export interface DesksListItemProps {
    desk: Desk,
}

function DesksListItem({ desk }: DesksListItemProps) {
    const handleDelete = () => {
        console.log('Deleting desk with id : ', desk.id);
    };

    const header = (
        <Fragment>
            <Button loading={false} onClick={handleDelete}>
                <GoTrash />
            </Button>
            {desk.name}
        </Fragment>
    );

    return (
        <ExpandablePanel header={header}>
            <FoldersList desk={desk} />
        </ExpandablePanel>
    );
}

export default DesksListItem;