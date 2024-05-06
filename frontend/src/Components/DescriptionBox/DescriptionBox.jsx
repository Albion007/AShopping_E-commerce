import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Ecommerce is a method of buying and selling goods and services online. 
        The definition of ecommerce business can also include tactics like affiliate marketing. 
        You can use ecommerce channels such as your own website, an established selling website like Amazon, 
        or social media to drive online sales.</p>
        <p>For consumers, shopping online differs in important ways from visiting a brick-and-mortar store. 
        Because online retailers are less constrained by physical space, they can offer a wider variety of products. 
        E-commerce also enables consumers to access stores that do not have a physical location near them.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
