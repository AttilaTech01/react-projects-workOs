import { Desk, useFetchDesksQuery, useAddDeskMutation } from "../store/store";
import Button from "./UI/Button";
import Dropdown, { DropdownItem } from "./UI/Dropdown";

export interface DesksListItemProps {
    deskChange: (desk: Desk) => void,
}

function DesksList({ deskChange }: DesksListItemProps) {
    const { data, error, isFetching } = useFetchDesksQuery();
    const [addDesk, results] = useAddDeskMutation();

    const handleDeskChange = async (deskId: string) => {
        const newDesk: Desk | undefined = data?.find((desk) => desk.id === deskId)
        newDesk && await deskChange(newDesk);
    };

    const handleAddDesk = async () => {
        await addDesk();
    };
    
    let dropdownItems: DropdownItem[];
    if (isFetching) {
        dropdownItems = [{ id: '0', name: 'Loading data...' }];
    } else if (error) {
        dropdownItems = [{ id: '0', name: 'Error while fetching' }];
    } else {
        data 
            ?   dropdownItems = data.map((desk) => {
                    return { id: desk.id, name: desk.name };
            })
            : dropdownItems = [{ id: '0', name: 'Error while fetching' }];
    }

    return (
        <div className="desks-list">
            <Button className="add-button" loading={results.isLoading} onClick={handleAddDesk}>
                + Desk
            </Button>
            <Dropdown id="desks-list-dropdown" data={dropdownItems} onSelect={handleDeskChange} />
        </div>
    );
}

export default DesksList;

