import React from "react";
import './Navbar.css';
import {AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram} from "react-icons/ai";
import {BiLogoGmail} from "react-icons/bi";



function NavbarPortfolio(){
    return(
        <div className="navbar">
            <div className="text">Olá, sou Arthur</div>
        <div className="image">
            <a href="https://mail.google.com/mail/u/0/?hl=pt-BR#inbox" target="blank"> <BiLogoGmail size = {30} /> </a>
            <a href="https://github.com/NXTarthur16" target="blank"> <AiFillGithub size = {30} /> </a>
            <a href="https://www.linkedin.com/in/arthur-ferreira-4bb275292/" target="blank"> <AiOutlineLinkedin size = {30} /> </a>
            <a href="https://www.instagram.com/nxt.arthur16/?next=%2F" target="blank"> <AiOutlineInstagram size = {30} /> </a>
        </div>

        </div>
    );
}

export default NavbarPortfolio;