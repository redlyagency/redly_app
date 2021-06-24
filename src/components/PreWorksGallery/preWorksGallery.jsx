import React from 'react';
import styled from 'styled-components';

import CustomizableGalleryComponent from './customizableGalleryComponent';

const PreGalleryWrapper = styled.div`
    padding: 50px 0 50px 0;
`;

class PreGalleryComponent extends React.Component {
    render() {
        return (
            <PreGalleryWrapper>
                <CustomizableGalleryComponent />
            </PreGalleryWrapper>
        );
    }
}

export default PreGalleryComponent;