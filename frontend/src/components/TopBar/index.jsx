import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import styles from "./styles.TopBar.css";

export default function TopBar(){

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    const [y, setY] = useState(window.scrollY);
    
    useEffect(()=>{
        window.addEventListener("scroll", () => setY(window.scrollY));

        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
        };
    }, [y]);


    return (
        <>
        <Wrapper className="flexCenter animate whiteBg" style={ y > 100 ? { height :"60px"} : {height : "80px"}}>
        <NavInner  className="container flexSpaceCenter">

            <Link className="container flexnullCenter" to="home" smooth={true}>
                {/* logo */}

                <h1 style = {{marginLeft: "15px"}} className="font20 extraBold">
                    CampusWorks
                </h1>
            </Link>

            <UlWrapper className="flexNullCenter">
                <li className="semiBold font15 pointer">
                    <Link className="active" style={{padding :"10px 15px"}} to="home" spy={true} smooth={true} offset={-80}>
                        Home
                    </Link>
                    
                </li>
                <li className="semiBold font15 pointer">
                    <Link className="active" style={{padding :"10px 15px"}}  spy={true} smooth={true} offset={-80}>
                        Profile
                    </Link>
                </li>

                <li className="semiBold font15 pointer">
                    <Link className="active" style={{padding :"10px 15px"}} spy={true} smooth={true} offset={-80}>
                        Inbox
                    </Link>
                </li>

                <li className="semiBold font15 pointer">
                    <Link className="active" style={{padding :"10px 15px"}} spy={true} smooth={true} offset={-80}>
                        Contracts
                    </Link>
                </li>

            </UlWrapper>
            
            <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
                <Button style={{ padding: "10px 30px 10px 0" }} onClick={handleLogout}>
                    Logout
                </Button>
                </li>
            </UlWrapperRight>
        </NavInner>

    </Wrapper>
        
    </>
    )
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;