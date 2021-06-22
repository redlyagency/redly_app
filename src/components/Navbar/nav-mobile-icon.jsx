import styled from "styled-components";

const NavWrapperOutline = styled.div`
    width: 50px;
    height: 50px;
`;
const NavIcon = styled.div`
    background-color: black;
    position: relative;
    height: 3px;
    width: 18px;
    border-radius: 100px;
    margin-top: 50%;
    transform: translate(50%, -50%);

    ::before {
        content: '';
        position: absolute;
        right: 0;
        top: -9px;
        height: 3px;
        width: 28px;
        background-color: black;
        border-radius: 100px;
    }

    ::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -9px;
        height: 3px;
        width: 36px;
        background-color: black;
        border-radius: 100px;
    }
`;

export const NavMobileIcon = () => {
    return (
        <>
            <NavWrapperOutline>
                <NavIcon />
            </NavWrapperOutline>
        </>
    )
}

export default NavMobileIcon;