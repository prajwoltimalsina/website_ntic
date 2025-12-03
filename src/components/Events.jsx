import React from 'react';

const Events = () => {
  const events = [
    {
      type: 'Conference',
      title: 'Annual Innovation Summit 2025',
      date: 'March 15-17, 2025',
      location: 'Main Auditorium',
      attendees: '500+ Expected',
      description: 'Join leading researchers and innovators for three days of presentations, workshops, and networking focused on cutting-edge research and future technologies.',
      image: 'Large conference hall with attendees at innovation summit'
    },
    {
      type: 'Workshop',
      title: 'Machine Learning in Healthcare',
      date: 'February 28, 2025',
      location: 'AI & Computing Center',
      attendees: '50 Participants',
      description: 'Hands-on workshop exploring practical applications of machine learning algorithms in medical diagnosis and treatment optimization.',
      image: 'Workshop session with people learning about machine learning and healthcare'
    },
    {
      type: 'Seminar',
      title: 'Sustainable Energy Technologies',
      date: 'March 5, 2025',
      location: 'Virtual & In-Person',
      attendees: '200+ Registered',
      description: 'Expert panel discussion on the latest breakthroughs in renewable energy, battery technology, and sustainable infrastructure.',
      image: 'Seminar presentation on sustainable energy with solar panel displays'
    }
  ];

  const announcements = [
    {
      date: 'January 20, 2025',
      title: 'New Research Grant Program Announced',
      description: 'We are excited to announce $5M in new research grants available for innovative projects in AI and biotechnology.'
    },
    {
      date: 'January 15, 2025',
      title: 'Partnership with Global Tech Leaders',
      description: 'NRIC has formed strategic partnerships with leading technology companies to accelerate research commercialization.'
    },
    {
      date: 'January 10, 2025',
      title: 'Facility Expansion Completed',
      description: 'Our new Materials Science wing is now open, featuring state-of-the-art characterization equipment.'
    }
  ];

  const handleRegister = () => {
    alert('This feature is coming soon!');
  };

  const handleReadMore = () => {
    alert('This feature is coming soon!');
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Events & News</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Upcoming Events & Announcements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our latest events, conferences, and important announcements 
            from the research community
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                  <img 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1509930854872-0f61005b282e" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅 {event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍 {event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>👥 {event.attendees}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <button 
                    onClick={handleRegister}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 flex justify-center items-center"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Announcements</h3>
          <div className="space-y-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.title}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {announcement.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {announcement.description}
                    </p>
                  </div>
                  <button 
                    onClick={handleReadMore}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 whitespace-nowrap"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events, 
            research breakthroughs, and collaboration opportunities.
          </p>
          <button 
            onClick={handleRegister}
            className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;