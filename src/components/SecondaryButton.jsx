const SecondaryButton = ({ children, onClick }) => (
  <div
    className="p-2 px-4 bg-gray-200 rounded mr-2 text-gray-800 cursor-pointer ease-in duration-100 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-200"
    onClick={onClick}
  >
    <p>{children}</p>
  </div>
);

export default SecondaryButton;
