import styles from '../KYC/CSS/steptwobusiness.module.scss'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import steponeimg from '../../../../../assets/png/steponeimg.png'
import { useState } from 'react'
import documentKYCIcon from '../../../../../assets/svg/documentKYC.svg'
import { BsArrowLeft } from 'react-icons/bs'

const StepTwoBusiness = ({ setStep }) => {
    const [bvnNumber, setBvnNumber] = useState('')
    const [directorName, setDirectorName] = useState('')
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [menu, setMenu] = useState(false)
    const [documentUrl, setdocumentUrl] = useState("")

    const [document] = useState([
        { id: 1, document: 'International passport' },
        { id: 2, document: 'National ID' },
        { id: 3, document: 'Government ID' },
    ])

    const chooseIdentificationDoc = async (e) => {
        setDropDownValue(e.document)
    }

    const validate = () => {
        return !bvnNumber || !directorName || dropDownValue === "Select"
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

    const [instruction] = useState([
        { id: 1, instruction: 'Upload the right document.' },
        { id: 2, instruction: 'Document must be visible and clear' },
        { id: 3, instruction: 'Only Government Issued Documents are acceptable.' },
        { id: 4, instruction: 'Uploaded document must have your photo.' },
    ])

    const goToStepThree = () => {
        setStep(3)
    }

    const goToStepOne =()=>{
        setStep(1)
    }

    return (
        <div className={styles.parent}>
            <h1 className={styles.stepnumber}><BsArrowLeft onClick={goToStepOne} className={styles.arrow}/>Step 2</h1>
            <div className={styles.disctwocontent}>
                <div className={styles.writeup}>
                    <h2 className={styles.headtwo}>Director’s Details</h2>
                    <p className={styles.paratwo}>Upload the necessary documents below to verify the director’s identity.</p>
                </div>

                <img src={steponeimg} alt="" />
            </div>

            <h2 className={styles.rowname}>Name of director</h2>
            <input className={styles.calculatorinput}
                type="text"
                placeholder='Enter your registration number'
                onChange={e => setDirectorName(e.target.value)}
            />

            <h2 className={styles.rowname}>BVN</h2>
            <input className={styles.calculatorinput}
                type="number"
                placeholder='Enter your registration number'
                onChange={e => setBvnNumber(e.target.value)}
                onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()}
            />

            <h2 className={styles.rowname}>Choose identification document</h2>

            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} style={{ cursor: 'pointer' }} >
                <DropdownToggle tag="a" className={styles.dropdownToggle} >
                    <div>{dropDownValue}</div>
                    <div className={styles.dropDownrow}>
                        <div style={{ color: '#777E90', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                    </div>
                </DropdownToggle>
                <DropdownMenu className={styles.dropBox}>
                    {document.map((document, index) =>
                        <DropdownItem className={styles.value} key={index} onClick={() => chooseIdentificationDoc(document)}>{document.document} </DropdownItem>
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
                        <img src={documentUrl} alt="" className={styles.insideimg} />
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
                    onClick={goToStepThree}
                    style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

export default StepTwoBusiness;