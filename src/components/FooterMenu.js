import React, { useEffect, useState } from "react";
import "../styles/footerMenu.css";
import { ReactComponent as Vector } from "../images/Vector.svg";
import { ReactComponent as User } from "../images/user.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  hideFooterMenu,
  showFooterMenu,
  resetFilters,
  triggerSearch,
} from "../redux/footerMenuSlice"; // Adjust the import path as needed
import { ReactComponent as Search } from "../images/search.svg";

const FooterMenu = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.footerMenu.isVisible);
  const isFilterGroupMobile = useSelector(
    (state) => state.footerMenu.isFilterGroupMobile
  );
  const isFilterMobile = useSelector(
    (state) => state.footerMenu.isFilterMobile
  );

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollDownThreshold = 15;
  const scrollUpThreshold = 10;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (
        currentScrollTop > lastScrollTop &&
        currentScrollTop - lastScrollTop > scrollDownThreshold
      ) {
        dispatch(hideFooterMenu());
      } else if (
        currentScrollTop < lastScrollTop &&
        lastScrollTop - currentScrollTop > scrollUpThreshold
      ) {
        dispatch(showFooterMenu());
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, dispatch]);

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const handleSearch = () => {
    dispatch(triggerSearch());
  };
  return (
    <>
      {!isFilterGroupMobile && (
        <div
          className={`footer-menu 
        ${isVisible ? "visible" : ""}   ${!isFilterMobile && "visible"}  
    `}
        >
          {!isFilterMobile ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                className="Body-1"
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleReset}
              >
                Сбросить всё
              </div>

              <button
                className="button Body-3 button-animate-filter"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={handleSearch} // Обработчик клика на "Искать"
              >
                <Search
                  style={{
                    stroke: "#E60023",
                    marginRight: "4px",
                    height: "18px",
                  }}
                />
                Искать
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "120px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `link ${isActive ? "active" : ""}`
                    }
                  >
                    <Vector />
                  </NavLink>
                </div>
                <div style={{ marginTop: "4px" }}>
                  <NavLink
                    to="/"
                    style={{ fontSize: "12px" }}
                    className={({ isActive }) =>
                      `link ${isActive ? "active" : ""}`
                    }
                  >
                    <div className="Body-2" style={{ marginTop: "4px" }}>
                      Курсы
                    </div>
                  </NavLink>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "120px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `link ${isActive ? "active" : ""}`
                    }
                  >
                    <User />
                  </NavLink>
                </div>
                <div className="Body-2" style={{ marginTop: "4px" }}>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `link ${isActive ? "active" : ""}`
                    }
                    style={{ fontSize: "12px" }}
                  >
                    <div className="Body-2" style={{ marginTop: "4px" }}>
                      Вход
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FooterMenu;
