const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Get Rid of False Information
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Have you ever wondered how to eliminate fake news?
          Search no further — InfoCheck has you covered.
        </p>

        <a
          href="/verify"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Verify Information
        </a>

        {/* Placeholder image */}
        <div className="mt-12">
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
