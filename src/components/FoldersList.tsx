import { Desk, useFetchFoldersQuery } from '../store/store';
import Skeleton from './UI/Skeleton';
import FoldersListItem from "./FoldersListItem";

export interface FoldersListProps {
    desk: Desk,
}

function FoldersList({ desk }: FoldersListProps) {
    const { data, error, isFetching } = useFetchFoldersQuery(desk);

    let content;
    if (isFetching) {
        content = <Skeleton times={3} />;
    } else if (error) {
        content = <div>Error while fetching data ...</div>;
    } else {
        content = data?.map((folder) => {
            return <FoldersListItem key={folder.id} folder={folder} />
        })
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default FoldersList;