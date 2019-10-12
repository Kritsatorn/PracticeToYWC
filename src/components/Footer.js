import React from 'react';

const Footer = (props) => {
  const {company , email} = props

  return (
    <div>{company}  {email}</div>
  )
}

export default Footer;