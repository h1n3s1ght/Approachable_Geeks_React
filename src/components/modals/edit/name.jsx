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

export function NameModal({setShowName, userName, setUserName}) {

const [ thisPageName, setThisPageName ] = useState(userName);

  return (
      <PageCont>
       <div className={styles.darkBG} onClick={() => {setShowName(false)}} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.closeBtn} onClick={() => {setShowName(false)}}>
            <IoMdArrowBack style={{ marginBottom: "-3px", marginRight: "60%", width: "25vw" }} />
          </button>
            <h5 className={styles.heading}>What's Your Name?</h5>
          </div>
            <div className={styles.modalContent}>
                <FormLabel> Your Full Name</FormLabel>
                <FormTextArea 
                value={thisPageName}
                className="FormInput"
                onChange={e => setThisPageName(e.target.value)}
                />
            </div>
            </div>
           <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
               <button 
               className={styles.submitBtn}
               onClick={() => {
                setUserName(thisPageName);
                setShowName(false)
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