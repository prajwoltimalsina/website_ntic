import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      title: 'Email',
      details: 'info@nric.org',
      link: 'mailto:info@nric.org'
    },
    {
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      title: 'Address',
      details: '123 Innovation Drive, Research Park, CA 94025',
      link: '#'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This update is coming soon!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our research, facilities, or collaboration opportunities? 
            We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-gray-700 font-semibold mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Collaboration Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">
                  Message
                </label>
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

          <div className="space-y-8">
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

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img 
                alt="Research center location on map" 
                className="w-full h-full object-cover"
               src="https://images.unsplash.com/photo-1613375058973-ad78f6512f38" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const contactInfo = [
//     {
//       title: 'Email',
//       details: 'info@nric.org',
//       link: 'mailto:info@nric.org'
//     },
//     {
//       title: 'Phone',
//       details: '+1 (555) 123-4567',
//       link: 'tel:+15551234567'
//     },
//     {
//       title: 'Address',
//       details: '123 Innovation Drive, Research Park, CA 94025',
//       link: '#'
//     }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('This feature is coming soon!');
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Have questions about our research, facilities, or collaboration opportunities? 
//             We'd love to hear from you
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
//                   placeholder="john@example.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="text-gray-700 font-semibold mb-2 block">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
//                   placeholder="Collaboration Inquiry"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Tell us about your inquiry..."
//                   required
//                 ></textarea>
//               </div>

//               <button 
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex justify-center items-center"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info) => (
//                   <div
//                     key={info.title}
//                     className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
//                   >
//                     <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
//                       <p className="text-gray-600">{info.details}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
//               <div className="space-y-2 text-gray-700">
//                 <div className="flex justify-between">
//                   <span className="font-medium">Monday - Friday:</span>
//                   <span>8:00 AM - 6:00 PM</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-medium">Saturday:</span>
//                   <span>9:00 AM - 1:00 PM</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-medium">Sunday:</span>
//                   <span>Closed</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
//               <img 
//                 alt="Research center location on map" 
//                 className="w-full h-full object-cover"
//                src="https://images.unsplash.com/photo-1613375058973-ad78f6512f38" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;