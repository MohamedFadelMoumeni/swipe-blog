import {ContainerStyles} from "./container.styles"

const Container = ({children}) => {
    return (
        <ContainerStyles>
            {children}
        </ContainerStyles>
    )
}

export default Container;
