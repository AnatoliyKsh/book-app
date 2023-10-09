import SearchPanel from "./SearchPanel";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__photo">
            <img
              src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1"
              alt="header-photo"
            />
          </div>
          <div className="header__title text-white text-center fs-1 fw-bold mb-4">
            Book-app
          </div>
          <SearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Header;
