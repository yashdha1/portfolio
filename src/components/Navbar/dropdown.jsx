import { useState, useEffect, useRef } from "react";
import { createPopper } from "@popperjs/core";
import { getImageUrl } from "../../utils";

const Dropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);
  const popperRef = useRef(null);

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
    if (popperRef.current) {
      popperRef.current.setOptions({ placement: "bottom-start" });
    }
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  // Create Popper instance on mount
  useEffect(() => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      popperRef.current = createPopper(
        btnDropdownRef.current,
        popoverDropdownRef.current,
        {
          placement: "bottom-start",
        }
      );
    }
  }, [btnDropdownRef, popoverDropdownRef]);

  // bg colors
  return (
    <>
      <div className="inline-flex align-middle z-50 mx-3">
        <button
          className={"hover:shadow-lg outline-none focus:outline-none"}
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <img
            src={getImageUrl("hero/menu.png")}
            className="size-10"
          />
        </button>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-black z-50 float-left py-2 list-none text-left rounded shadow-lg m-4"
          }
          style={{ minWidth: "12rem" }}
        >
          <a
            href="#about"
            className={
              "text-lg py-2 px-4 font-Akshar block w-full whitespace-no-wrap bg-transparent  tracking-wide font-light"
            }   
          >
            About
          </a>
          <a
            href="#skills"
            className={
              "text-lg py-2 px-4 font-Akshar block w-full whitespace-no-wrap bg-transparent tracking-wide font-light"
            }
          >
            Skills
          </a>
          <a
            href="#projects"
            className={
              "text-lg py-2 px-4 font-Akshar block w-full whitespace-no-wrap bg-transparent tracking-wide font-light"
            }
          >
            Projects
          </a>
          <a
            href="#contact"
            className={
              "text-lg py-2 px-4 font-Akshar block w-full whitespace-no-wrap bg-transparent tracking-wide font-light"
            }
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
