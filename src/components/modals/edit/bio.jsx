import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../../../components/Modal.module.css';
import { IoMdArrowBack } from 'react-icons/io'
// import { Icon } from 'semantic-ui-react';


const PageCont = styled.div`
    width: 100vw;
`;

const FormTextArea = styled.textarea`
    width: 60%;
    margin-left: 20%;
    color: black;
    border: none;
    resize: none;
    font-size: 1.75em;
`;

export function BioModal({setShowBio, userBio, setUserBio}) {

const [ thisPageBio, setThisPageBio ] = useState(userBio);

  return (
      <PageCont>
       <div className={styles.darkBG} onClick={() => {setShowBio(false)}} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.closeBtn} onClick={() => {setShowBio(false)}}>
            <IoMdArrowBack style={{ marginBottom: "-3px", marginRight: "60%", width: "25vw" }} />
          </button>
            <h5 className={styles.heading}>What Type of Passenger Are You?</h5>
          </div>
            <div className={styles.modalContent}>
                <FormTextArea 
                id="BioTextArea"
                maxlength='300'
                rows='6'
                cols={20}
                value={thisPageBio}
                onChange={e => setThisPageBio(e.target.value)}
                />
            </div>
            </div>
           <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
               <button 
               className={styles.submitBtn}
               onClick={() => {
                setUserBio(thisPageBio);
                setShowBio(false)
                }}
               >
                Update
              </button>
            </div>
          </div>
        </div>
    </PageCont>
  );
}