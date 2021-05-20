import React from 'react'
import '../App.css'

function Footer() {
  return (
    <>
      <footer class="page-footer footer-copyright background">
        <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">
            {process.env.NODE_ENV} Mode {process.env.REACT_APP_API_ENDPOINT}
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
