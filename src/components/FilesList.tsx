import { Folder, useFetchFilesQuery } from '../store/store';
import Skeleton from './UI/Skeleton';
import FilesListItem from "./FilesListItem";

export interface FilesListProps {
    folder: Folder,
}

function FilesList({ folder }: FilesListProps) {
    const { data, error, isFetching } = useFetchFilesQuery(folder);

    let content;
    if (isFetching) {
        content = <Skeleton times={3} />;
    } else if (error) {
        content = <div>Error while fetching data ...</div>;
    } else {
        content = data?.map((file) => {
            return <FilesListItem key={file.id} file={file} />
        })
    }

    return (
        <div className='files-list'>
            {content}
        </div>
    );
}

export default FilesList;