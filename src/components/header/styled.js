import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 8px;

    input {
        border: 2px #ccc solid;
        border-radius: 10px;
        width: 100%;
        height: 40px;
        padding: 10px;
    }

    button {
        background: #ccc;
        padding: 8px;
        margin: 0 8px;
        border-radius: 10px;
        
        &:hover {
            background: #ddd;
        }
    }

`;
