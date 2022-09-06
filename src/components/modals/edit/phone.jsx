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

export function PhoneModal({setShowPhone, userPhone, setUserPhone}) {

const [ thisPagePhone, setThisPagePhone ] = useState(userPhone);

  return (
      <PageCont>
       <div className={styles.darkBG} onClick={() => {setShowPhone(false)}} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.closeBtn} onClick={() => {setShowPhone(false)}}>
            <IoMdArrowBack style={{ marginBottom: "-3px", marginRight: "60%", width: "25vw" }} />
          </button>
            <h5 className={styles.heading}>What's Your Phone Number?</h5>
          </div>
            <div className={styles.modalContent}>
                <FormLabel> Your Phone Number</FormLabel>
                <FormTextArea 
                type="tel"
                className="FormInput"
                value={thisPagePhone}
                onChange={e => setThisPagePhone(e.target.value)}
                />
            </div>
            </div>
           <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
               <button 
               className={styles.submitBtn}
               onClick={() => {
                setUserPhone(thisPagePhone);
                setShowPhone(false)
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