import React from 'react';

const Footer = (props) => {
  const {company , email} = props

  return (
    <div className="container-fluid">
      <hr />
      <div className="text-center title text-uppercase">
        <small>
        <span className="text-danger">Powered by {company}</span>  |<span className="text-moted">contact by email: {email}</span>
        </small>
      </div>
    </div>
  )
}

export default Footer;