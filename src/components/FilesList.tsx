import { Folder, useFetchFilesQuery, useAddFileMutation } from '../store/store';
import Button from './UI/Button';
import Skeleton from './UI/Skeleton';
import FilesListItem from "./FilesListItem";

export interface FilesListProps {
    folder: Folder,
}

function FilesList({ folder }: FilesListProps) {
    const { data, error, isFetching } = useFetchFilesQuery(folder);
    const [addFile, results] = useAddFileMutation();

    const handleAddFile = async () => {
        await addFile(folder);
    };

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
            <Button className="add-button" loading={results.isLoading} onClick={handleAddFile}>
                + File
            </Button>
        </div>
    );
}

export default FilesList;