import { File, useAddItemMutation, useFetchItemsQuery } from '../store/store';
import Button from './UI/Button';
import Skeleton from './UI/Skeleton';
import ItemsListItem from "./ItemsListItem";

export interface ItemsListProps {
    file: File,
}

function ItemsList({ file }: ItemsListProps) {
    const { data, error, isFetching } = useFetchItemsQuery(file);
    const [addItem, results] = useAddItemMutation();

    const handleAddItem = async () => {
        await addItem(file);
    };

    let content;
    if (isFetching) {
        content = <Skeleton times={3} />;
    } else if (error) {
        content = <div>Error while fetching data ...</div>;
    } else {
        content = data?.map((item) => {
            return <ItemsListItem key={item.id} item={item} />
        })
    }

    return (
        <div className='items-list'>
            {content}
            <Button className="add-button" loading={results.isLoading} onClick={handleAddItem}>
                + Item
            </Button>
        </div>
    );
}

export default ItemsList;