const FloatingButtons = () => {
  return (
    <div className="fixed left-4 bottom-20 flex flex-col gap-4 z-50">
      <a
        href="tel:+919404527494"
        className="bg-orange-500 p-4 rounded-full text-white"
      >
        📞
      </a>

      <a
        href="https://wa.me/919404527494"
        className="bg-green-500 p-4 rounded-full text-white"
      >
        💬
      </a>
    </div>
  );
};

export default FloatingButtons;
