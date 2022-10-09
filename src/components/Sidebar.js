import Modal from "react-modal";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

function Sidebar() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <a href="#!">
            Brand <strong>Colors</strong>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>

        <nav>
          <ul>
            <li>
              <a href="!#" onClick={openModal}>
                <strong>About BrendColors</strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Modal
        id="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>
          <IoCloseSharp />
        </button>
        <h2 className="modal-header">About BrandColors</h2>
        <div className="modal-description">
          <p>
            BrandColors was created by <strong>DesignBombs</strong> . The goal
            was to create a helpful reference for the brand color codes that are
            needed most often.
          </p>
          <br />
          <p>
            It's been featured by Smashing Magazine, CSS-Tricks, Web Design
            Depot, Tuts+, and over
            <strong>2 million pageviews</strong>. There are now over
            <strong>600 brands</strong>
            with <strong>1600 colors </strong> and the collection is always
            growing.
          </p>
        </div>
      </Modal>
    </>
  );
}
export default Sidebar;
