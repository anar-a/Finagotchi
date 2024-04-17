'use client'
import { useState } from "react"

export default function ModalButtoon(props: any) {
  const [showModal, setShowModal] = useState(false);
  const Modal = props.modal

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleBackgroundClick(event: React.MouseEvent) {
    const target = event.target as HTMLDivElement;
    if (target.id === "background") {
      toggleModal();
    }
  }

  return (
    <>
      <button onClick={toggleModal}>
        {props.children}
      </button>

      {showModal && <div 
      id="background"
      onClick={handleBackgroundClick}
      className="fixed inset-0 backdrop-blur-sm z-10 flex justify-center items-center">
        <Modal toggleModal={toggleModal} />
      </div>}
    </>
  )
}
