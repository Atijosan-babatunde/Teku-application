import styles from '../KYC/CSS/stepfivebusiness.module.scss'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import proof from '../../../../../assets/png/proof.png'
import documentKYCIcon from '../../../../../assets/svg/documentKYC.svg'
import { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'


const StepFiveBusiness = ({setStep}) => {
    const [documentUrl, setdocumentUrl] = useState("")
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [menu, setMenu] = useState(false)
    const [bvn, setBvn] = useState('')

    const validate = () => {
        return !bvn || dropDownValue === "Select" || !documentUrl
    }

    const changeValue = async (e) => {
        setDropDownValue(e.document)
    }


    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };

    const handleChange = async (event) => {
        const fileUploaded = event.target.files[0];

        getBase64(fileUploaded, async (result) => {
            setdocumentUrl(result);
        });
    };

    const handleClick = () => {
        document.current.click();
    };

    const [document] = useState([
        { id: 1, document: 'Ikeja' },
        { id: 2, document: 'Epe' },
        { id: 3, document: 'Ojota' },
    ])

    const [instruction] = useState([
        { id: 1, instruction: 'Upload the right document.' },
        { id: 2, instruction: 'Document must be visible and clear' },
        { id: 3, instruction: 'Only Government Issued Documents are acceptable.' },
        { id: 4, instruction: 'Uploaded document must have your photo.' },
    ])

    const goToStepTwo = () => {
        setStep(6)
    }

    const goToStepThree = () => {
        setStep(4)
    }

    return ( 
        <div className={styles.parent}>
        <h1 className={styles.stepnumber}><BsArrowLeft onClick={goToStepThree} className={styles.arrow}/>Step 5</h1>
        <div className={styles.disctwocontent}>
            <div className={styles.writeup}>
                <h2 className={styles.headtwo}>Proof of address</h2>
                <p className={styles.paratwo}>Input correctly your address and upload a proof of address.</p>
            </div>

            <img src={proof} alt="" />
        </div>

        <h2 className={styles.rowname}>Address</h2>
        <input className={styles.calculatorinput}
            type="text"
            placeholder='Enter your house address'
            onChange={e => setBvn(e.target.value)}
        />

        <h2 className={styles.rowname}>Local Government/State</h2>

        <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} style={{ cursor: 'pointer' }} >
            <DropdownToggle tag="a" className={styles.dropdownToggle} >
                <div>{dropDownValue}</div>
                <div className={styles.dropDownrow}>
                    <div style={{ color: '#777E90', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                </div>
            </DropdownToggle>
            <DropdownMenu className={styles.dropBox}>
                {document.map((document, index) =>
                    <DropdownItem className={styles.value} key={index} onClick={() => changeValue(document)}>{document.document} </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>

        <div className={styles.split}>
            <div className={styles.driverdoc}>
                <input
                    type="file"
                    accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
                    ref={document}
                    onChange={(e) => handleChange(e)}
                    style={{ display: "none" }}
                />

                {documentUrl ? (
                    <img src={documentUrl} alt=""  className={styles.insideimg}/>
                ) : (
                    <>
                        <img src={documentKYCIcon} alt="" />
                        <p onClick={handleClick}>
                            Tap to upload document <br />
                            <span> Maximum file size: 5mb</span>
                        </p>
                    </>
                )}
            </div>
            <div className={styles.instruction}>
                {instruction.map((instruction, index) =>
                    <div className={styles.innerinstruction} key={index}>
                        <div className={styles.greenround}></div>
                        <p className={styles.innerp}>{instruction.instruction}</p>

                    </div>
                )}
            </div>

        </div>

        <div className={styles.requestbut}>
            <button
                className={styles.btnrequest}
                disabled={validate()}
                onClick={goToStepTwo}
                style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
            >
                Continue
            </button>
        </div>
    </div>
     );
}
 
export default StepFiveBusiness;