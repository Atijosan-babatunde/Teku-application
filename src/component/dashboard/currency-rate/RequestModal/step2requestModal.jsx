import React, { useState, useMemo, useRef } from 'react'
import styles from '../RequestModal/css/step2requestmodal.module.scss'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowLeft } from 'react-icons/bs'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import documentKYCIcon from '../../../../assets/svg//documentKYC.svg'
import plus from '../../../../assets/png/plus.png'
import { FiSearch } from 'react-icons/fi'
import attached from '../../../../assets/png/attached.png'

const StepTwoRequestModal = ({ setStep }) => {
    const options = useMemo(() => countryList().getData(), [])
    const [country, setcountry] = useState('')
    const [menuThree, setMenuThree] = useState(false)
    const [dropDownValueThree, setDropDownValueThree] = useState('Select')
    const [checkBox, setCheckBox] = useState('')
    const [paymentInstruction, setPaymentInstruction] = useState('')
    const [filesName, setFilesName] = useState("");
    const [formData, setFormData] = useState({});

    const changeHandler = value => {
        setcountry(value)
    }


    const changeValueThree = async (e) => {
        setDropDownValueThree(e.amount)
    }

    const [amountThree] = useState([
        { id: 1, amount: 'School Fees' },
        { id: 2, amount: 'Medical Bills' },
        { id: 3, amount: 'Family & Friends' },
        { id: 4, amount: 'Good and Services' },
        { id: 5, amount: 'Other' },
    ])

    const handleChangeDoc = async (event, name) => {
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

    const [recipiantdata] = useState([
        { id: 1, shortname: "TF", reason: "Tuition fees", method: "cash pickup", payingto: "Coventry University, student number...", attached: "Document attached", country: "UK" }
    ])

    const handleClickDoc = () => {
        documentdoc.current.click();
    };

    const documentdoc = useRef(null);

    const validate = () => {
        return !checkBox || dropDownValueThree === "Select" || !paymentInstruction || !country || !filesName
    }

    const goToStepThree = () => {
        setStep(3)
    }

    const goToStepOne = () => {
        setStep(1)
    }

    return (
        <div className={styles.parent}>
            <p className={styles.firsttext} onClick={goToStepOne}><BsArrowLeft className={styles.arrow} />Go back to Request details</p>
            <h1 className={styles.contenth1}>Add recipient</h1>
            <p className={styles.contentp}>Input the necessary information below to complete this transaction.</p>
            <div className={styles.content}>
                <div className={styles.discone}>
                    <div className={styles.formholdertwo}>
                        <h2 className={styles.rowname}>Country</h2>
                        <Select
                            options={options}
                            value={country}
                            onChange={changeHandler}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? '#ccccc' : '#ccccc',
                                    borderRadius: "8px",
                                    height: "49px",
                                    marginTop: '14px',
                                }),
                            }}
                        />
                    </div>

                    <h2 className={styles.rowname}>Purpose of payment</h2>
                    <Dropdown isOpen={menuThree} toggle={() => setMenuThree(!menuThree)} style={{ cursor: 'pointer' }} >
                        <DropdownToggle tag="a" className={styles.dropdownToggle} >
                            <div className={styles.dropDownValue}>{dropDownValueThree}</div>
                            <div className={styles.dropDownrow}>
                                <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className={styles.dropBox}>
                            {amountThree.map((amount, index) =>
                                <DropdownItem className={styles.value} key={index} onClick={() => changeValueThree(amount)}>{amount.amount} </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>

                    <div className={styles.driverdoc}>
                        <input
                            type="file"
                            accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
                            ref={documentdoc}
                            onChange={(e) => handleChangeDoc(e)}
                            style={{ display: "none" }}
                        />
                        <img src={documentKYCIcon} alt="" />
                        {filesName ? (<p onClick={handleClickDoc}>
                            {filesName}
                        </p>) : (<p onClick={handleClickDoc}>
                            Tap to upload payment document/invoice. <br />
                            <span> Maximum file size: 5mb</span>
                        </p>)}
                    </div>


                    <h2 className={styles.rowname}>Payment instruction</h2>
                    <textarea className={styles.calculatorinputtextarea} type="number" placeholder="Input recipient account details." cols="30" onChange={e => setPaymentInstruction(e.target.value)} />
                    <p className={styles.green}>0/500</p>

                    <h2 className={styles.rowname}>Payment description (optional)</h2>
                    <textarea className={styles.calculatorinputtextarea} type="number" placeholder="Write here" cols="10" />

                    <div className={styles.clickhere}>
                        <input type='checkbox' onChange={e => setCheckBox(e.target.value)} />
                        Save beneficiary details
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

                <div className={styles.disctwo}>
                    <div className={styles.sidedata}>
                        <div className={styles.recipiantplus}>
                            <h1>Choose recipient</h1>
                            <img src={plus} alt="" />
                        </div>
                        <div className={styles.search}>
                            <input type="text" placeholder="Search" />
                            <span><FiSearch /></span>
                        </div>

                        {recipiantdata.map((data, index) =>
                            <div className={styles.recipiantdata} key={index}>

                                <div className={styles.recipiantbody}>
                                    <div className={styles.recipiantflex}>
                                        <p className={styles.paraone}>{data.shortname}</p>
                                        <h1 className={styles.headone}>{data.reason}</h1>
                                        <p className={styles.paratwo}>{data.method}</p>
                                    </div>
                                    <h2 className={styles.recipiantotherdata}>
                                        {data.payingto}
                                    </h2>
                                    <div className={styles.recipiantdataflex}>
                                        <h2><span><img src={attached} alt="" /></span> {data.attached}</h2>
                                        <p>{data.country}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepTwoRequestModal;