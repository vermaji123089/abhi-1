import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>
        <main>
            <h1>Contact Us</h1>
            <form
  onSubmit={"https://formspree.io/f/mknanqwg"}
  method="POST"
>
                <div>
                    <label>Name</label>
                    <input type="name" required placeholder='Enter the name' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="emal" required placeholder='Enter the Email' />
                </div>
                <div>
                    <label>message</label>
                    <input type="text" required placeholder='tell us about your query' />
                </div>
                 <button className='button' type="submit">Send</button>
      
                
            </form>
        </main>
    </div>
  )
}

export default Contact