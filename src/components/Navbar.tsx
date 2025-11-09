import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="w-screen z-50 top-0 left-0  flex-center min-h-[7vh] fixed bg-black  ">
      <nav className="flex-between 2xl:px-0 px-5 mx-auto  container ">
        <img
          className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          src="/logo.svg"
          alt="Apple Logo"
        />
        <ul className="flex-center gap-8">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a
                className="hidden md:block text-white font-regular opacity-80 text-sm hover:opacity-100 transition-all duration-300 ease-in-out"
                href={label}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button className="bg-transparent border-none outline-none cursor-pointer">
            <img src="/search.svg" alt="search" />
          </button>
          <button className="bg-transparent border-none outline-none cursor-pointer">
            <img src="/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
