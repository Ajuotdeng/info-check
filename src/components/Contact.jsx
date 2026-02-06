const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Let’s Help You Curb Misinformation
        </h3>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            required
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
