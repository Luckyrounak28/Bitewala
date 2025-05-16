import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: 'Our Location',
      details: [
        '123 Refreshment Street,',
        'Flavor District, Mumbai,',
        'Maharashtra 400001, India'
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: 'Phone',
      details: [
        '+91 801 234 5678',
        '+91 802 345 6789'
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: 'Email',
      details: [
        'hello@bitewala.com',
        'support@bitewala.com'
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              We'd love to hear from you! Reach out using the form below or through our contact information.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Information */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6"
              >
                How to Reach Us
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-5 rounded-lg shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 p-2 rounded-full mr-3">
                        {info.icon}
                      </div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                    </div>
                    <div className="space-y-1 text-neutral-600">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Map */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 bg-white p-2 rounded-lg shadow-md"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571669!2d72.7163117!3d19.0822507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1619171181023!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Bitewala Location"
                  className="rounded-lg"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              Find answers to common questions about our products and services.
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {[
                {
                  question: 'How long does shipping take?',
                  answer: 'Standard shipping takes 3-5 business days across India. Express shipping options are available at checkout for 1-2 day delivery in select cities.'
                },
                {
                  question: 'Are your products vegan?',
                  answer: 'Yes, all Bitewala products are 100% vegan and do not contain any animal-derived ingredients.'
                },
                {
                  question: 'Do you ship internationally?',
                  answer: 'Currently, we only ship within India. We\'re working on expanding our shipping network to international locations soon.'
                },
                {
                  question: 'What is the shelf life of your products?',
                  answer: 'Our powder products have a shelf life of 12 months from the manufacturing date. Ready-to-drink bottles have a 6-month shelf life. All products have the expiry date clearly marked on the packaging.'
                },
                {
                  question: 'Do you offer bulk orders for events?',
                  answer: 'Yes, we offer special pricing for bulk orders for events, corporate gifting, and other occasions. Please contact our sales team at sales@bitewala.com for more information.'
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;