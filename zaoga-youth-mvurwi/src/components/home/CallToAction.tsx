const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-primary text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to move Forward in Faith?</h2>
      <p className="text-brand-light mb-8 max-w-2xl mx-auto text-lg">
          Join our WhatsApp group to stay connected with daily devotionals, updates, and community chats.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors inline-flex items-center">
          Join WhatsApp Group
      </button>
    </section>
  );
};

export default CallToAction;