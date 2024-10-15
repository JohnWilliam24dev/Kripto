import React, {useState} from 'react'
import DrawerNav from '../../components/Drawer/Drawer';
import "./Dashboard.css"
import SimpleAccordion from '../../components/Accordion/Accordion';
import Editor from '../../components/Editor/Editor';
import Editor2 from '../../components/Editor2/Editor2';


function Dashboard() {
  return (
    <div className='dashboard_body'>
      <DrawerNav/>
      <Editor2/>
      
    </div>
  )
}

export default Dashboard