import { useFetchDesksQuery } from "../store/store";
import DesksListItem from "./DesksListItem";

function DesksList() {
    const { data, error, isFetching } = useFetchDesksQuery();
    
    let content;
    if (isFetching) {
        content = <div>Waiting for data ...</div>;
    } else if (error) {
        content = <div>Error while fetching data ...</div>;
    } else {
        content = data?.map((desk) => {
            return <DesksListItem key={desk.id} desk={desk} />;
        })
    }

    return (
        <div>
            <h1>Desks</h1>
            {content}
        </div>
    );
}

export default DesksList;

