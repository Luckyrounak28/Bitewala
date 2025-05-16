import { motion } from 'framer-motion';
import { Award, Leaf, RecycleIcon, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-10 w-10 text-primary-600" />,
      title: 'Natural Goodness',
      description: 'We use only 100% natural ingredients in all our products.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary-600" />,
      title: 'Quality First',
      description: 'We never compromise on the quality of our products.'
    },
    {
      icon: <RecycleIcon className="h-10 w-10 text-primary-600" />,
      title: 'Sustainability',
      description: 'Our packaging and processes are designed with the environment in mind.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: 'Community',
      description: 'We support the communities where our ingredients are sourced.'
    }
  ];

  const teamMembers = [
    {
      name: 'Raj Sharma',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Raj founded Bitewala with a vision to create natural beverages that bring joy to people without harming the planet.'
    },
    {
      name: 'Priya Patel',
      position: 'Chief Product Officer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Priya is the mastermind behind our product formulations, ensuring they meet our high standards of taste and quality.'
    },
    {
      name: 'Amit Singh',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Amit ensures that our production processes are efficient and sustainable, maintaining our zero waste commitment.'
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
              About Bitewala
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Discover our story, mission, and the people behind the refreshing taste of Kaccha Cooler.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-neutral-700">
                Bitewala was born in 2020 from a simple idea: create delicious, refreshing beverages using only natural ingredients while minimizing environmental impact.
              </p>
              <p className="mb-4 text-neutral-700">
                Our founder, Raj Sharma, discovered an old family recipe for a cooling summer drink that had been passed down for generations. This recipe would later become our signature Kaccha Cooler.
              </p>
              <p className="text-neutral-700">
                Today, we continue to innovate while staying true to our roots. Each Bitewala product is crafted with care, using sustainable practices and ethically sourced ingredients.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:order-first"
            >
              <img 
                src="https://images.pexels.com/photos/5947028/pexels-photo-5947028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Bitewala's beginnings" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              These principles guide everything we do at Bitewala, from product development to customer service.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-primary-100 p-3 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
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
              Meet Our Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              The passionate individuals who make Bitewala's mission come to life every day.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-4">{member.position}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90">
                To create delicious, refreshing beverages using only natural ingredients while minimizing our environmental footprint, providing customers with a product they can feel good about consuming.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90">
                To become the leading sustainable beverage brand in India, known for our commitment to quality, taste, and environmental responsibility, making a positive impact on both our customers and the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;