import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 8px;
    width: 350px;
    height: 150px;
    border: 1px solid #ccc;
    border-radius: 8px;
    align-content: center;
    margin: 0.5em;
    box-sizing: border-box;

    h2 {
        font-size: 1.2em;
        font-weight: bold;
        border-bottom: 2px solid #ccc;
        color: #676767;
        margin-bottom: 10px;
        letter-spacing: 1px;
        background: #ddd;
    }

    a {
        color: blue;
    }

    a:hover {
        text-decoration: underline;
    }
`;
