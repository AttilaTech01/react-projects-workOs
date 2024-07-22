import { Fragment } from "react";
import { GoTrash } from "react-icons/go";
import { Item } from '../store/store';
import Button from "./UI/Button";

export interface ItemsListItemProps {
    item: Item,
}

function ItemsListItem({ item }: ItemsListItemProps) {
    const handleDelete = () => {
        console.log('Deleting folder with id : ', item.id);
    };

    return (
        <Fragment>
            <Button loading={false} onClick={handleDelete}>
                <GoTrash />
            </Button>
            {item.name}
        </Fragment>
    );
}

export default ItemsListItem;