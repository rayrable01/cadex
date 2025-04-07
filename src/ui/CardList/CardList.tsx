import styled from "styled-components";
import { CardContent } from "../Card/Card";

export const CustomList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0;
    list-style: none;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const CardList = () => {
    return (
        <CustomList style={{ listStyle: "none", padding: 0 }}>
        {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
                <CardContent />
            </li>
        ))}
    </CustomList>
    );
};
