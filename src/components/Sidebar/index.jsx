import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaUserAlt, 
  FaChartBar,
} from 'react-icons/fa'
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import SidebarItem from '../SidebarItem';
import { MdLunchDining } from "react-icons/md";

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>  
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Estatísticas" />
        <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        <SidebarItem Icon={MdLunchDining} Text="Pedidos" />
        <SidebarItem Icon={MdOutlineRestaurantMenu} Text="Cardápio" />
        <SidebarItem Icon={HiOutlineDocumentReport} Text="Relatórios" />
      </Content>
    </Container>
  )
}

export default Sidebar