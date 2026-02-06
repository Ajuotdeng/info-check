const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Services
        </h3>

        <ul className="grid md:grid-cols-2 gap-8 text-gray-700">
          <li className="bg-white p-6 rounded-lg shadow-sm">
            Raise awareness about cybercrime legislation.
          </li>
          <li className="bg-white p-6 rounded-lg shadow-sm">
            Conduct workshops on verifying information.
          </li>
          <li className="bg-white p-6 rounded-lg shadow-sm">
            Equip journalists with fact-checking skills.
          </li>
          <li className="bg-white p-6 rounded-lg shadow-sm">
            Collaborate with accredited media organizations.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
