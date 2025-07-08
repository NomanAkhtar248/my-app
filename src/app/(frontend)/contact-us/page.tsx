'use client';

import { useState } from 'react';

export default function Page() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occupation: '',
    message: ''
  });
 

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submition  function
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // yahan par mera data bacend say fech hu raha ha 
      const res = await fetch('/api/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      //  submition alret
      setFormData({
        name: '',
        phone: '',
        email: '',
        occupation: '',
        message: ''

      })
      alert('Form submitted successfully!');
    } 
    
    catch (e) {
      alert('Form submission failed!');
    }

    
  };

  

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">

      <input
        name="name"
        value={formData.name}
        placeholder="your name"
        onChange={handleChange}
        className="border border-gray-700 w-full p-2"
      />

      <input
        name="phone"
        value={formData.phone}
        placeholder="Your phone"
        onChange={handleChange}
        className="border border-gray-700 w-full p-2"
      />

      <input
        name="email"
        value={formData.email}
        placeholder="Your email"
        onChange={handleChange}
        className="border border-gray-700 w-full p-2"
      />

      <input
        name="occupation"
        value={formData.occupation}
        placeholder="Your occupation"
        onChange={handleChange}
        className="border border-gray-700 w-full p-2"
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        className="border border-gray-700 w-full p-2"
      >
        
      </textarea>

      <button type="submit" className="bg-black text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
