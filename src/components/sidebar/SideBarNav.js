import React from "react";
import { Link } from "react-router-dom";
import "./sideBarNav-style.css"

const SideBarNav = () => {
  return (
    <div className="sidebar-nav">
      <ul>
        <li>
          <i class="fas fa-tachometer-alt"></i>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <i class="fas fa-sitemap"></i>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <i class="fas fa-table"></i>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <i class="fas fa-shopping-cart"></i>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <i class="fas fa-user"></i>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <i class="fas fa-cogs"></i>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarNav;
