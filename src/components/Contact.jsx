import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { title: 'Email', details: 'ntic@ku.edu.np', link: 'mailto:ntic@ku.edu.np' },
    { title: 'Phone', details: '', link: 'tel:' },
    { title: 'Address', details: 'Dhulikehel, Kathmandu, Nepal', link: '#' }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This update is coming soon!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our research, facilities, or collaboration opportunities? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="text-gray-700 font-semibold mb-2 block">
                    {field.charAt(0).toUpperCase() + field.slice(1)} {field === 'name' && 'Full Name'}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder={field === 'name' ? 'John Doe' : field === 'email' ? 'john@example.com' : 'Collaboration Inquiry'}
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex justify-center items-center"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100" data-aos="fade-up">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between"><span className="font-medium">Monday - Friday:</span><span>8:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span className="font-medium">Saturday:</span><span>9:00 AM - 1:00 PM</span></div>
                <div className="flex justify-between"><span className="font-medium">Sunday:</span><span>Closed</span></div>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
              <img 
                alt="Research center location on map" 
                className="w-full h-full object-cover"
                src="/team/KU_building.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
