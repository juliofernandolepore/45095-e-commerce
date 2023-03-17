const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-red-600 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <p className="text-sm text-black-500 sm:text-start dark:text-gray-400 hover:underline">
        Fernando Lepore - Derechos de Autor.
      </p>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-800 dark:text-gray-800 sm:mt-0">
        <li>
          <p className="mr-4 hover:underline md:mr-6"> instagram </p>
        </li>
        <li>
          <p className="mr-4 hover:underline md:mr-6"> Youtube </p>
        </li>
        <li>
          <p className="mr-4 hover:underline md:mr-6"> facebook </p>
        </li>
        <li>
          <p className="mr-4 hover:underline md:mr-6"> Linkedin </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
