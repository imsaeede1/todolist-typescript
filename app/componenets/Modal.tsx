interface ModalProps{
  modalOpen:boolean;
  setModalOpen:(modalOpen:boolean)=>boolean |void;
  children:React.ReactNode;
}
const Modal:React.FC<ModalProps> = ({modalOpen,setModalOpen,children}) => {
    return ( 
        <>
<dialog id="my_modal_5" className={`modal ${modalOpen? "modal-open":""} modal-bottom sm:modal-middle`}>
  <div className="modal-box">
    {children}
   
    <div className="modal-action">
      <form method="dialog">
        <button className="btn" onClick={()=>setModalOpen(!modalOpen)}>Close</button>
      </form>
    </div>
  </div>
</dialog>
        </>
     );
}
 
export default Modal;