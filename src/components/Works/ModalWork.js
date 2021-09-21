import React, { useContext, useEffect } from 'react'
import Modal from 'react-modal';
import { FaBars, FaTimes, FaLinkedinIn, FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";
import dataWorks from '../../data/works.json';
import { WorkContext } from '../../Context/DataContext';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

Modal.setAppElement('#root');

export const ModalWork = React.memo(({ children, isActive, handleClose }) => {

  // const [modalIsOpen, setIsOpen] = React.useState(true);

  // const closeModal = () => {
  //   setIsOpen(false);
  // }
  // const openModal = () => {
  //   setIsOpen(true);
  // }


  //const { SelectedWork } = useContext(WorkContext);
  // const work = {};
  // useEffect(() => {
  //   work = dataWorks.Works.find(item => item.id == SelectedWork);
  //   console.log(work);
  // }, [isopen])



  return (
    <>

      <Modal

        isOpen={isActive}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleClose}
        closeTimeoutMS={200}
        //style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modalOverlay"
      >
        <div className="head-close">
          <FaTimes
            className="btnCloseModal"
            onClick={handleClose}
          />
        </div>

        {children}


      </Modal>
    </>
  )
})
