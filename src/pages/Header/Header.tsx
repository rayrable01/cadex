import styled from "styled-components"
import { ContactButton } from "../../ui/ContactButton/ContactButton";

const HeaderContainer = styled.div`
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
` ;

const HeaderLogoLink = styled.a`
    font-size: 20px;
    font-weight: bold;
`


export const Header = () => {
    return (
        <header className="header">
            <HeaderContainer>
                <HeaderLogoLink href="#">Some Company</HeaderLogoLink>
                <ContactButton />
            </HeaderContainer>
        </header>
    )
}
