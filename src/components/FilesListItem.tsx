import { Fragment } from "react";
import { GoTrash } from "react-icons/go";
import { File } from '../store/store';
import Button from "./UI/Button";
import ExpandablePanel from "./UI/ExpandablePanel";
import ItemsList from "./ItemsList";

export interface FilesListItemProps {
    file: File,
}

function FilesListItem({ file }: FilesListItemProps) {
    const handleDelete = () => {
        console.log('Deleting folder with id : ', file.id);
    };

    const header = (
        <Fragment>
            <Button loading={false} onClick={handleDelete}>
                <GoTrash />
            </Button>
            {file.title}
        </Fragment>
    );

    return (
        <ExpandablePanel header={header}>
            <ItemsList file={file} />
        </ExpandablePanel>
    );
}

export default FilesListItem;