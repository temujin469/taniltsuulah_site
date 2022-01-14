import styled from 'styled-components';
import {Container} from '../../globalStyles';
import {ImUserTie} from 'react-icons/im';
import { Link } from 'react-router-dom';
import { primaryClr,whiteClr,navClr} from '../../globalStyles';


export const Nav = styled.nav`
background:${navClr};
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
position:sticky;
top:0;
z-index:999;    
`;
export const NavbarContainer = styled(Container)`
display:flex;
justify-content:space-between;
height:80px;
`;

export const NavLogo = styled(Link)`
color:${whiteClr};
justify-self:flex-start;
cursor:pointer;
display:flex;
align-items:center;
text-decoration:none;
font-size:2rem;
`;
export const NavIcon = styled(ImUserTie)`
margin-right:0.5rem;
`;

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:900px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
}
`;
export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;

@media screen and (max-width:900px){
    flex-direction:column;
    position:absolute;
    top:80px;
    width:100%;
    height:90vh;
    left:${({click})=> click ? 0 : '-100%'};
    opacity:1;
    transition:all 0.5s ease;
    background:${navClr};
}
`;
export const NavItem = styled.li`
height:80px;
border-bottom:3px solid transparent;
transition:0.3s ease;

&:hover{
    border-bottom:3px solid ${primaryClr};
}

@media screen and (max-width:900px){
    width:100%;
    &:hover{
        border:none;
    }
}
`;
export const NavLink = styled(Link)`
color:${whiteClr};
cursor:pointer;
display:flex;
align-items:center;
text-decoration:none;
font-size:1.5rem;
padding:0.5rem 1rem;
height:100%;

@media screen and (max-width:900px){
    width:100%;
    padding:2rem;
    display:block;
    text-align:center;

    &:hover{
        color:${primaryClr};
        transition:all 0.3s ease;
    }

}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width:900px) {
display:flex;
justify-content:center;
align-items:center;
height:120px;
width:100%;
}
`;

export const NavBtnLink = styled(Link)`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
text-decoration:none;
padding:8px 16px;
border:none;
outline:none;
`;



