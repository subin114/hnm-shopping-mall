import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

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

  const navigate = useNavigate();
  let [width, setWidth] = useState(0);

  /** 검색 기능 함수 */
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 값 받아오기
      let keyword = event.target.value;
      // url 변경
      navigate(`/?q=${keyword}`);
    }
  };

  const isAuthenticated = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(authenticateAction.logout());
  };

  return (
    <div className="Navbar">
      {/* 반응형 추가 */}
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="top-nav">
        {/* 반응형 추가 */}
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>

        {isAuthenticated ? (
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
