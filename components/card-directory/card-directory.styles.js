import styled from "styled-components"

export const Directory = styled.div`
padding: 2rem 0;
width: 100%;
display: grid;
column-gap: 1.5rem;
row-gap: 1.5rem;
@media (max-width: 640px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 640px){
    grid-template-columns: repeat(3, minmax(0, 1fr));
}
@media  (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    
}
`;