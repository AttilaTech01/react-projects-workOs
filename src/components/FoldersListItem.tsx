import { Fragment } from "react";
//import { GoTrash } from "react-icons/go";
import { Folder } from '../store/store';
import ExpandablePanel from "./UI/ExpandablePanel";
import FilesList from "./FilesList";

export interface FoldersListItemProps {
    folder: Folder,
}

function FoldersListItem({ folder }: FoldersListItemProps) {
    /*
    const handleDelete = () => {
        console.log('Deleting folder with id : ', folder.id);
    };
    */

    const header = (
        <Fragment>
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