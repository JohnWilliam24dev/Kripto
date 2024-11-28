import React, {useState} from 'react'
import DrawerNav from '../../components/Drawer/Drawer';
import "./Dashboard.css"
import SimpleAccordion from '../../components/Accordion/Accordion';

import Editor2 from '../../components/Editor2/Editor';


function Dashboard() {
  return (
    <div className='dashboard_body'>
      <DrawerNav/>
      <Editor2 className="Editor"/>
      
    </div>
  )
}

export default Dashboard