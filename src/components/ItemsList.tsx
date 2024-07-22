import { File, useFetchItemsQuery } from '../store/store';
import Skeleton from './UI/Skeleton';
import ItemsListItem from "./ItemsListItem";

export interface ItemsListProps {
    file: File,
}

function ItemsList({ file }: ItemsListProps) {
    const { data, error, isFetching } = useFetchItemsQuery(file);

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
        <div>
            {content}
        </div>
    );
}

export default ItemsList;