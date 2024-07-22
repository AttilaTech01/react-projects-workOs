import { Fragment } from "react";
import { GoTrash } from "react-icons/go";
import { Folder } from '../store/store';
import Button from "./UI/Button";
import ExpandablePanel from "./UI/ExpandablePanel";
import FilesList from "./FilesList";

export interface FoldersListItemProps {
    folder: Folder,
}

function FoldersListItem({ folder }: FoldersListItemProps) {
    const handleDelete = () => {
        console.log('Deleting folder with id : ', folder.id);
    };

    const header = (
        <Fragment>
            <Button loading={false} onClick={handleDelete}>
                <GoTrash />
            </Button>
            {folder.title}
        </Fragment>
    );

    return (
        <ExpandablePanel header={header}>
            <FilesList folder={folder} />
        </ExpandablePanel>
    );
}

export default FoldersListItem;