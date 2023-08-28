/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

import Modal from "react-modal";

import Sidebar from "../components/SideBar";
import Summary from "../components/Summary";
import useCoffe from "../hooks/useCoffe";
import ModalProduct from "../components/ModalProduct";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Layout() {
  const { modal } = useCoffe();
  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100">
          <Outlet />
        </main>
        <Summary />
        <Modal isOpen={modal} style={customStyles}>
          <ModalProduct />
        </Modal>
      </div>
    </>
  );
}
