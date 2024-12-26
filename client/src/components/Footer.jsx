import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="footer__categories">
          <li><Link to="/posts/categories/Service">Service</Link></li>
          <li><Link to="/posts/categories/NewProject">NewProject</Link></li>
          <li><Link to="/posts/categories/Sponsorings">Sponsorings</Link></li>
          <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
        </ul>

        <div className="footer__copyright">
          <small>All Right Reserved &copy; Copyright, Rajarata Fire Service.</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer
