import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../../../components/Modal.module.css';
import { IoMdArrowBack } from 'react-icons/io'
// import { Icon } from 'semantic-ui-react';


const PageCont = styled.div`
    width: 100vw;
`;

const FormTextArea = styled.input`
    width: 60%;
    margin-left: 20%;
    color: black;
    border: none;
    font-size: 1.75em;

    &.FormInput {
        border: none;
    }
`;

const FormLabel = styled.label`
    width: 60%;
    margin-left: 20%;
    color: gray;
    border: none;
    font-size: 1.25em;
    margin-bottom: 1%;
`;

export function EmailModal({setShowEmail, userEmail, setUserEmail}) {

const [ thisPageEmail, setThisPageEmail ] = useState(userEmail);

  return (
      <PageCont>
       <div className={styles.darkBG} onClick={() => {setShowEmail(false)}} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.closeBtn} onClick={() => {setShowEmail(false)}}>
            <IoMdArrowBack style={{ marginBottom: "-3px", marginRight: "60%", width: "25vw" }} />
          </button>
            <h5 className={styles.heading}>What's Your Email?</h5>
          </div>
            <div className={styles.modalContent}>
                <FormLabel> Your Email address</FormLabel>
                <FormTextArea 
                className="FormInput"
                value={thisPageEmail}
                onChange={e => setThisPageEmail(e.target.value)}
                />
            </div>
            </div>
           <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
               <button 
               className={styles.submitBtn}
               onClick={() => {
                setUserEmail(thisPageEmail);
                setShowEmail(false)
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