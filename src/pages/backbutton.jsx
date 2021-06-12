import { useHistory } from "react-router-dom";

export const Item = () => {
    let history = useHistory();
    return (
        <>
            <buttom onClick={() => history.goBack()}>Back</buttom>
        </>
    )
}

export default Item;