import Cookies from 'js-cookie'
import { IoIosHome } from "react-icons/io";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi";
import { withRouter } from 'react-router-dom';
import { NavItem , NavDiv , Unorder , Button , Icon , Image,Svg ,LinkDes2 ,ForSmallDiv , ButtonSmall} from './styledComponent'

const Navbar = props => {
    const logout = () => {
        Cookies.remove('jwt_token')
        const { history } = props
        history.replace('/login')
    }
    return (
        <>
        <NavItem>
        <Image src="https://res.cloudinary.com/alishakhan987/image/upload/v1710012345/enhanced-image__18_-removebg-preview_uqvkms.png" />
        <NavDiv>
            <Unorder>
                <LinkDes2 to="/">
                <li>HOME</li>
                </LinkDes2>
                <LinkDes2 to="/product">
                <li>PRODUCTS</li>
                </LinkDes2>
                <LinkDes2  to="/cart">
                <li>CART</li>
                </LinkDes2>
            </Unorder>
        </NavDiv>
        <Button onClick={logout}>
            Logout
            <Icon>
                <Svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                </Svg>
            </Icon>
        </Button>
       <ButtonSmall>
          <FiLogOut size={25} color={"#bf7a7f"} onClick={logout}/>
        </ButtonSmall>
    </NavItem>
    <ForSmallDiv>
        <LinkDes2 to="/"> <IoIosHome size={20} color={"#bf7a7f"}/> </LinkDes2>
   <LinkDes2 to="/product"> <GiBoxUnpacking size={20} color={"#bf7a7f"}/></LinkDes2>
   <LinkDes2 to="/cart">  <FaShoppingCart size={20} color={"#bf7a7f"}/></LinkDes2>
  
        </ForSmallDiv>
    </>
    )
}

export default withRouter(Navbar);
