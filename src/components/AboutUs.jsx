const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-16 bg-white border-t border-gray-100"
      aria-labelledby="about-us-heading"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          id="about-us-heading"
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          About Us
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          InfoCheck is a web-based platform dedicated to combating rumors and
          misinformation in South Sudan. We verify information by cross-checking
          claims against trusted and accredited media sources across South Sudan
          and the East African region.
        </p>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Our mission is to promote accurate information, reduce the spread of
          hate speech, and support peace-building efforts by empowering citizens,
          journalists, and institutions with reliable fact-checking tools.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
