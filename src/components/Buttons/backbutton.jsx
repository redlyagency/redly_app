import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

export const Item = () => {
    let history = useHistory();
    return (
        <>
            <Button variant="primary" onClick={() => history.goBack()}>Back</Button>
        </>
    )
}

export default Item;