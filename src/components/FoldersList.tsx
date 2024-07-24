import { Desk, useAddFolderMutation, useFetchFoldersQuery } from '../store/store';
import Button from './UI/Button';
import Skeleton from './UI/Skeleton';
import FoldersListItem from "./FoldersListItem";

export interface FoldersListProps {
    desk: Desk,
}

function FoldersList({ desk }: FoldersListProps) {
    const { data, error, isFetching } = useFetchFoldersQuery(desk);
    const [addFolder, results] = useAddFolderMutation();

    const handleAddFolder = async () => {
        await addFolder(desk);
    };

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
        <div className='folders-list'>
            <h2>Folders</h2>
            {content}
            <Button className="add-button" loading={results.isLoading} onClick={handleAddFolder}>
                + Folder
            </Button>
        </div>
    );
}

export default FoldersList;