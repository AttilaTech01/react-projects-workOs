//import { GoTrash } from "react-icons/go";
import { Item } from '../store/store';

export interface ItemsListItemProps {
    item: Item,
}

function ItemsListItem({ item }: ItemsListItemProps) {
    /*
    const handleDelete = () => {
        console.log('Deleting folder with id : ', item.id);
    };
    */

    return (
        <div className='items-list-item'>
            {item.name}
        </div>
    );
}

export default ItemsListItem;