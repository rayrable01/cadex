import styled from "styled-components"

const CompanyLink = styled.a`
    font-weight: bold;
    font-size: 20px;
`
const FooterContainer = styled.div`
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
` ;


export const Footer = () => {
    return (
        <footer className="footer">
            <FooterContainer>
                <CompanyLink href="#">Some Company 2025</CompanyLink>
            </FooterContainer>
        </footer>
    )
}