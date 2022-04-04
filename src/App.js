import './App.css';
import React from 'react';
import Usertable from './adminTables/Usertable';
import AdminSidebar from './adminTables/AdminSidebar';
import AdminAnalytics from './adminTables/AdminAnalytics';
import Templatetable from './adminTables/Templatetable';
import Transactiontable from './adminTables/Transactiontable';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './adminTables/AdminLogin';
function App() {
  return (
    <div class="admin-main">
    {/* <AdminLogin /> */}
       <AdminSidebar />

      <div class="admin-content">
        <Routes>
          <Route exact path="/" element={<AdminAnalytics />} />
          <Route exact path="/users" element={<Usertable />} />
          <Route exact path="/templates" element={<Templatetable />} />
          <Route exact path="/transactions" element={<Transactiontable />} />
        </Routes>
    </div> 
    </div>
  );
}

export default App;
