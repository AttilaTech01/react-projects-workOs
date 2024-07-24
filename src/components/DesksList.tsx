import { Desk, useFetchDesksQuery, useAddDeskMutation } from "../store/store";
import Button from "./UI/Button";
import DesksListItem from "./DesksListItem";

export interface DesksListItemProps {
    deskChange: (desk: Desk) => void,
}

function DesksList({ deskChange }: DesksListItemProps) {
    const { data, error, isFetching } = useFetchDesksQuery();
    const [addDesk, results] = useAddDeskMutation();

    const handleAddDesk = async () => {
        await addDesk();
    };
    
    let content;
    if (isFetching) {
        content = <div>Waiting for data ...</div>;
    } else if (error) {
        content = <div>Error while fetching data ...</div>;
    } else {
        content = data?.map((desk) => {
            return <DesksListItem key={desk.id} desk={desk} deskChange={deskChange} />;
        })
    }

    return (
        <div className="desks-list">
            <h1>Desks</h1>
            {content}
            <Button className="add-button" loading={results.isLoading} onClick={handleAddDesk}>
                + Desk
            </Button>
        </div>
    );
}

export default DesksList;

