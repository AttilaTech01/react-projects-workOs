import { GoTrash } from "react-icons/go";
import { Item, useDeleteItemMutation } from '../store/store';
import Button from './UI/Button';

export interface ItemsListItemProps {
    item: Item,
}

function ItemsListItem({ item }: ItemsListItemProps) {
    const [deleteItem, results] = useDeleteItemMutation();
    
    const handleDelete = () => {
        deleteItem(item.id);
    };
    

    return (
        <div className='items-list-item'>
            {item.name}
            <Button className="mr-2" loading={results.isLoading} onClick={handleDelete}>
                <GoTrash />
            </Button>
        </div>
    );
}

export default ItemsListItem;