import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const loginNav = useNavigate();
  const goLogin = () => {
    loginNav("/login");
  };

  return (
    <div className="Navbar">
      <div>
        <div className="login-btn" onClick={goLogin}>
          <FontAwesomeIcon icon={faUser} className="login-icon" />
          로그인
          {}
        </div>
      </div>
      <div className="logo">
        <img
          width={60}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
          alt="H&M"
        />
      </div>
      <div className="menu-section">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>

        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
