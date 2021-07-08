import React from 'react';
import styled from 'styled-components';

import Template404 from '../templates/404/template404'

import { theme } from '../utils/theme/theme';

const Wrapper404 = styled.div`
    //background-color: green;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
    
    @media ${ theme.device.browserzoom } {
        height: 1080px;
        min-height: auto;
    }
`;

class List extends React.Component {
    render() {
        return (
            <div>
                <Wrapper404>
                    <Template404 />
                </Wrapper404>
            </div>
        );
    }
}

export default List;