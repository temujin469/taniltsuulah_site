import React,{useState,useEffect} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from "react-icons/lib";
import {Button} from "../../globalStyles";


import {
    Nav,
    NavbarContainer,
    NavIcon,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavItemBtn,
    NavBtnLink,
} from "./Navbar.element";

const Navbar = ()=>{
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = ()=> setClick(!click);

    const showButton = ()=> {
        if(window.innerWidth <= 900){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize',showButton)

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                        Temka
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>

                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLink to="/">Нүүр</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">Тухай</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Холбоо</NavLink>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>БҮРГҮҮЛЭХ</Button>
                                </NavBtnLink>
                                )
                                :
                                (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>БҮРТГҮҮЛЭХ</Button>
                                </NavBtnLink>
                                )
                            }
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}
export default  Navbar