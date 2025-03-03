"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt className="text-purple-500" />, 
    title: "Phone",
    description: <span className="text-[#ADB7BE]">[+94] 775 731 788</span>,
  },
  {
    icon: <FaEnvelope className="text-pink-500" />, 
    title: "Email",
    description: <span className="text-[#ADB7BE]">achinimadhuwanthi29@gmail.com</span>,
  },
  {
    icon: <FaMapMarkerAlt className="text-pink-400" />, 
    title: "Address",
    description: <span className="text-[#ADB7BE]">'Sirimathiya', Sandaganagama, Weligepola, Balangoda</span>,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "94775731788";
    const textMessage = `Hello, I'm ${formData.firstname} ${formData.lastname}.

✉ Email: ${formData.email}  
📞 Phone: ${formData.phone}  
🔧 Service: ${formData.service || "Not specified"}  

📝 Message:  
${formData.message}  

Looking forward to your response!`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="pt-10 flex flex-col items-center px-4 md:px-10">
      <div className="container max-w-4xl mx-auto flex flex-col items-center">
        <h3 className="text-4xl font-bold text-white text-center mb-6">Hire Me</h3>
        <p className="text-white/60 text-center mb-8 max-w-lg">
          I’m currently looking for new opportunities and would love to be a part of an innovative team. If you’re hiring or have a project that fits my skills, let’s connect!
        </p>
        <div className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left">
            {info.map((item, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start">
                <div className="w-14 h-14 bg-[#27272c] rounded-full flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <p className="text-white/60">{item.title}</p>
                <h3 className="text-xl">{item.description}</h3>
              </div>
            ))}
          </div>
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-[#27272c] p-6 rounded-xl shadow-md">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full text-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UX/UI Design">UX/UI Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-40 text-white" placeholder="Type your message here..." name="message" value={formData.message} onChange={handleChange} required />
              <Button size="md" className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
