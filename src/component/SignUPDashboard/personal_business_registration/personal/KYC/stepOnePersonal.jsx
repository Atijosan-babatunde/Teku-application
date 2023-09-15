import styles from '../KYC/CSS/steponepersonal.module.scss'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import steponeimg from '../../../../../assets/png/steponeimg.png'
import documentKYCIcon from '../../../../../assets/svg/documentKYC.svg'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StepOnePersonal = ({ setStep }) => {
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [menu, setMenu] = useState(false)
    const [bvn, setBvn] = useState('')
    const [filesName, setFilesName] = useState("");
    const [formData, setFormData] = useState({});

    const validate = () => {
        return !bvn || dropDownValue === "Select" || !filesName
    }

    const changeValue = async (e) => {
        setDropDownValue(e.documentdoc)
    }


    const handleChange = async (event, name) => {
        const fileUploaded = event.target.files[0];
        setFilesName(fileUploaded.name);
        getBase64(fileUploaded, async (result) => {
            setFormData((curr) => {
                return { ...curr, [name]: result };
            });
        });
    };

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


    const document = useRef(null);

    const handleClick = () => {
        document.current.click();
    };

    const [documentdoc] = useState([
        { id: 1, documentdoc: 'International passport' },
        { id: 2, documentdoc: 'National ID' },
        { id: 3, documentdoc: 'Drivers License' },
    ])

    const [instruction] = useState([
        { id: 1, instruction: 'Upload the right document.' },
        { id: 2, instruction: 'Document must be visible and clear' },
        { id: 3, instruction: 'Only Government Issued Documents are acceptable.' },
        { id: 4, instruction: 'Uploaded document must have your photo.' },
    ])

    const goToStepTwo = () => {
        setStep(2)
    }


    return (
        <div className={styles.parent}>
            <h1 className={styles.stepnumber}>Step 1</h1>
            <div className={styles.disctwocontent}>
                <div className={styles.writeup}>
                    <h2 className={styles.headtwo}>Identification Document</h2>
                    <p className={styles.paratwo}>Upload the necessary document below to verify your identity.</p>
                </div>

                <img src={steponeimg} alt="" />
            </div>

            <h2 className={styles.rowname}>BVN</h2>
            <input className={styles.calculatorinput}
                type="number"
                placeholder='Enter your BVN number'
                onChange={e => setBvn(e.target.value)}
                onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()}
            />

            <h2 className={styles.rowname}>Choose Identification document</h2>

            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} style={{ cursor: 'pointer' }} >
                <DropdownToggle tag="a" className={styles.dropdownToggle} >
                    <div>{dropDownValue}</div>
                    <div className={styles.dropDownrow}>
                        <div style={{ color: '#777E90', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                    </div>
                </DropdownToggle>
                <DropdownMenu className={styles.dropBox}>
                    {documentdoc.map((documentdoc, index) =>
                        <DropdownItem className={styles.value} key={index} onClick={() => changeValue(documentdoc)}>{documentdoc.documentdoc} </DropdownItem>
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
                    <img src={documentKYCIcon} alt="" />
                    {filesName ? (<p onClick={handleClick}>
                        {filesName}
                    </p>) : (<p onClick={handleClick}>
                        Tap to upload document <br />
                        <span> Maximum file size: 5mb</span>
                    </p>)}
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
            <ToastContainer />
        </div>
    );
}

export default StepOnePersonal;