import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
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

  const navigate = useNavigate();

  /** 검색 기능 함수 */
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 값 받아오기
      let keyword = event.target.value;

      // url 변경
      navigate(`/?q=${keyword}`);
    }
  };

  const logoutUser = () => setAuthenticate(false);
  console.log("확인", authenticate);

  return (
    <div className="Navbar">
      <div>
        {authenticate ? (
          <div className="login-btn" onClick={logoutUser}>
            <Link to="/" className="btn-link">
              <FontAwesomeIcon icon={faUser} className="login-icon" />
              <span>로그아웃</span>
            </Link>
          </div>
        ) : (
          <div className="login-btn">
            <Link to="/login" className="btn-link">
              <FontAwesomeIcon icon={faUser} className="login-icon" />
              <span>로그인</span>
            </Link>
          </div>
        )}
      </div>
      <div className="logo">
        <Link to="/">
          <img
            width={60}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
            alt="H&M"
          />
        </Link>
      </div>
      <div className="menu-section">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>

        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
