import { Link as LinkR } from 'react-router-dom'
// import { Link as LinkS } from 'react-router-dom'
import styled from 'styled-components'
export const Nav= styled.nav`
background: #0A192F;
height: 80px;
// margin-top: -80px;
display:flex;
justify-content: center;
align-items: center;
position: sticky;
top:0;
z-index: 10;
font-size:1rem;
@media screen and (max-widht:960px){
    transition: 0.8s all ease;
}
`
export const NavbarContainer=styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;

`
export const NavLogo=styled(LinkR)`
color: #fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 768px){
    display:block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;

}`
export const NavMenu = styled.ul`
display: flex;
aligh-items: center;
list-style: none;
text-align: center;
margin-right:-22px; `
