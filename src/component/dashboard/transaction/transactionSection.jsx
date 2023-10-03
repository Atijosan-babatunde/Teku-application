import styles from '../transaction/css/transactionsection.module.scss'
import { useState } from 'react';
import holder from "../../../assets/svg/holder.svg"
import Nigeria from "../../../assets/svg/nigeria.svg"
import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg"
import eye from '../../../assets/svg/eye.svg'
import askforrefund from '../../../assets/svg/askforrefund.svg'
import downloadreceiptimg from '../../../assets/svg/downloadreceiptimg.svg'
import ellip from '../../../assets/png/ellis.png'
import makeappeal from '../../../assets/svg/makeappeal.svg'
import download from '../../../assets/svg/download.svg'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import { FiSearch } from 'react-icons/fi'
import arrow from '../../../assets/png/arrow.png'
import { IoMdArrowDropdown } from "react-icons/io";
import CompletePreviewModal from './completePreviewModal';
import MakeAnAppeal from './makeAnAppeal';
import TransactionPreview from './transactionPreviewModal';
import AskForRefund from './askForRefund';
import CancelledPreviewModal from './cancelledPreviewModal';


const TransactionSection = () => {
    const [saveItemModal, setSaveItemModal] = useState('')
    const [saveItemModalCompleted, setSaveItemModalCompleted] = useState('')
    const [saveItemModalCancelled, setSaveItemModalCancelled] = useState('')
    const [anchorCancelledEl, setAnchorCancelledEl] = useState(null);
    const openCancelled = Boolean(anchorCancelledEl);
    const [anchorCompletedEl, setAnchorCompletedEl] = useState(null);
    const openCompleted = Boolean(anchorCompletedEl);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [product] = useState([
        { id: 1, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', amount: '1,000.00', purpose: 'Tuition fees', datetime: '21-12-2021, 10:38am', process: 'Processing Time: Within 24hrs', action: '' },
    ])


    // IN PROGRESS ELLIPS BUTTON
    const [subtitle] = useState([
        { id: 1, imgs: <img src={eye} className={styles.icon} alt='eye' />, text: 'Preview' },
        { id: 2, imgs: <img src={askforrefund} className={styles.icon} alt='askforrefund' />, text: 'Ask for refund' },
        { id: 3, imgs: <img src={downloadreceiptimg} className={styles.icon} alt='downloadreceipt' />, text: 'Download Receipt' },
    ])

    
    const handleBtn = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (item) => {
        setAnchorEl(null);
        if (item === 'Preview') {
            setShowModalPreview(true)
            setSaveItemModal(item)
        }

        if (item === 'Ask for refund') {
            setAskForRefundModal(true)
            setSaveItemModal(item)
        }

        if (item === 'Delete') {
            setDeleteModal(true)
            setSaveItemModal(item)
        }
    }

      // MODAL STATE FOR PREVIEW

      const [showModalPreview, setShowModalPreview] = useState(false)
      const [askForRefundModal, setAskForRefundModal] = useState(false)
      const [deleteModal, setDeleteModal] = useState(false)
  
      function handleAskForRefund() {
          setShowModalPreview(!showModalPreview)
          setDeleteModal(!deleteModal)
          setAskForRefundModal(!askForRefundModal)
      }
  
      function handleModalShowTransactionPreview() {
          setShowModalPreview(!showModalPreview)
          setDeleteModal(!deleteModal)
          setAskForRefundModal(!askForRefundModal)
      }

    // BUTTON END 



    // COMPLETED ELLIPS BUTTON
    const handleBtnCompleted = (event) => {
        setAnchorCompletedEl(event.currentTarget);
    };

    const handleCloseCompleted = (itemcompleted) => {
        setAnchorCompletedEl(null);
        if (itemcompleted === 'Preview') {
            setShowModalCompleted(true)
            setSaveItemModalCompleted(itemcompleted)
        }

        if (itemcompleted === 'Make an appeal') {
            setMakeAppealModal(true)
            setSaveItemModalCompleted(itemcompleted)
        }

        if (itemcompleted === 'Delete') {
            setDeleteModal(true)
            setSaveItemModalCompleted(itemcompleted)
        }
    }

    const [subtitlecompleted] = useState([
        { id: 1, imgs: <img src={eye} className={styles.icon} alt="img" />, text: 'Preview' },
        { id: 2, imgs: <img src={makeappeal} className={styles.icon} alt="img" />, text: 'Make an appeal' },
        { id: 3, imgs: <img src={download} className={styles.icon} alt="img" />, text: 'Download Receipt' },
        { id: 4, imgs: <img src={download} className={styles.icon} alt="img" />, text: 'Proof of payment' },
    ])

     // MODAL STATE COMPLETED

     const [showModalCompleted, setShowModalCompleted] = useState(false)
     const [makeAppealModal, setMakeAppealModal] = useState(false)
    //  const [deleteModal, setDeleteModal] = useState(false)
 
     function handleMakeAnAppeal() {
        setMakeAppealModal(!makeAppealModal)
        setShowModalCompleted(!showModalCompleted)
     }
 
     function handleModalShowCompleted() {
        setShowModalCompleted(!showModalCompleted)
        //  setDeleteModal(!deleteModal)
        setMakeAppealModal(!makeAppealModal)
     }
    //BUTTON END 


    // CANCELLED ELLIPS BUTTON
    const handleBtnCancelled = (event) => {
        setAnchorCancelledEl(event.currentTarget);
    };

    const handleCloseCancelled = (itemcancelled) => {
        setAnchorCancelledEl(null);
        if (itemcancelled === 'Preview') {
            setShowModalCancelled(true)
            setSaveItemModalCancelled(itemcancelled)
        }

        if (itemcancelled === 'Request again') {
            setMakeAppealModal(true)
            setSaveItemModalCancelled(itemcancelled)
        }

        if (itemcancelled === 'Download Receipt') {
            setDeleteModal(true)
            setSaveItemModalCancelled(itemcancelled)
        }
    }

    const [subtitlecancelled] = useState([
        { id: 1, imgs: <img src={eye} className={styles.icon} alt="img" />, text: 'Preview' },
        { id: 2, imgs: <img src={makeappeal} className={styles.icon} alt="img" />, text: 'Request again' },
        { id: 3, imgs: <img src={download} className={styles.icon} alt="img" />, text: 'Download Receipt' },
    ])

     // MODAL STATE CANCELLED

     const [showModalCancelled, setShowModalCancelled] = useState(false)
    //  const [makeAppealModal, setMakeAppealModal] = useState(false)
    //  const [deleteModal, setDeleteModal] = useState(false)
 
     function handleCancelledPreview() {
        setMakeAppealModal(!makeAppealModal)
        setShowModalCancelled(!showModalCancelled)
     }
 
    //  function handleModalShowCompleted() {
    //     setShowModalCompleted(!showModalCompleted)
    //     setMakeAppealModal(!makeAppealModal)
    //  }
    //BUTTON END 

  

    return (
        <>   
             {showModalCancelled && saveItemModalCancelled === 'Preview' && <CancelledPreviewModal {...{ handleCancelledPreview }} />}
             {/* {makeAppealModal && saveItemModalCompleted === 'Make an appeal' && <MakeAnAppeal {...{ handleMakeAnAppeal }} />} */}

            {showModalCompleted && saveItemModalCompleted === 'Preview' && <CompletePreviewModal {...{ handleModalShowCompleted }} />}
             {makeAppealModal && saveItemModalCompleted === 'Make an appeal' && <MakeAnAppeal {...{ handleMakeAnAppeal }} />}
            {/* {deleteModal && saveItemModal === 'Delete' && <DeletePaymentModal {...{ handleModalShow }} />} */}
            
            {showModalPreview && saveItemModal === 'Preview' && <TransactionPreview {...{ handleModalShowTransactionPreview }} />}
            {askForRefundModal && saveItemModal === 'Ask for refund' && <AskForRefund {...{ handleAskForRefund }} />}
            {/* {deleteModal && saveItemModal === 'Delete' && <DeletePaymentModal {...{ handleModalShow }} />} */}

            <div className={styles.parent}>
                <div className={styles.content}>
                    <div className={styles.topholder}>
                        <div className={styles.contentinner}>
                            <h1>Recent transactions</h1>
                            <div className={styles.search}>
                                <input type="text" placeholder="Search" />
                                <span><FiSearch /></span>
                            </div>
                        </div>
                        <div className={styles.rightholder}>
                            <h3>Download <span><img src={arrow} alt="" /></span></h3>
                            <div className={styles.dropdown}>
                                <div className={styles.lastdays}>Last 7 days <span><IoMdArrowDropdown /></span></div>
                                <div className={styles.dropdownContent}>
                                    <div className={styles.dropDownRow}>
                                        <div className={styles.logoDrodownDiv}>
                                        </div>
                                        <div className={styles.logoTitleDiv}>
                                            <div className={styles.dropDowntitle}>
                                                Past 24 hours
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.dropDownRow}>

                                        <div className={styles.logoDrodownDiv}>
                                        </div>
                                        <div className={styles.logoTitleDiv}>
                                            <div className={styles.dropDowntitle}>
                                                Past week
                                            </div>
                                        </div>

                                    </div>
                                    <div className={styles.dropDownRow}>

                                        <div className={styles.logoDrodownDiv}>
                                        </div>
                                        <div className={styles.logoTitleDiv}>
                                            <div className={styles.dropDowntitle}>
                                                Past week
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.dropDownRow}>

                                        <div className={styles.logoDrodownDiv}>
                                        </div>
                                        <div className={styles.logoTitleDiv}>
                                            <div className={styles.dropDowntitle}>
                                                Past month
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.dropDownRow}>

                                        <div className={styles.logoDrodownDiv}>

                                        </div>
                                        <div className={styles.logoTitleDiv}>
                                            <div className={styles.dropDowntitle}>
                                                Custom date
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                            <thead className={styles.tablerow}>
                                <tr>
                                    <th className={styles.tablehead} scope="col" style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}> Purpose of payment</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}>Amount</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Currency pair</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Date & time</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Status</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((prod, index) =>
                                    <tr style={{}} key={index}>
                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.purpose}
                                            <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>Cash pickup</span>
                                        </td>

                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.amount}
                                            <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>Paid</span>
                                        </td>

                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                            <img src={prod.flagone} alt="" className={styles.flagstyle} />
                                            <span className={styles.flagnamestyle} >{prod.flagnameone}</span>
                                            <span className={styles.dash}>-</span>
                                            <img src={prod.flagtwo} alt="" className={styles.flagstyle} />
                                            <span className={styles.flagnamestyle}>{prod.flagnametwo}</span>
                                        </td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                            {prod.datetime}
                                            <div className={styles.tableparagraph}>{prod.sendingMethod}</div>
                                        </td>
                                        <td className={styles.tabledataa} style={{ paddingTop: "1em" }}>
                                            <button className={styles.btn}>In progress</button>
                                        </td>
                                        <td className={styles.tabledatas} style={{ paddingTop: "1em" }}>
                                            <Button
                                                id="demo-customized-button"
                                                aria-controls={open ? "demo-customized-menu" : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? "true" : undefined}
                                                variant="contained"
                                                disableElevation
                                                onClick={handleBtn}
                                                className="btntable"
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <img src={ellip} alt="" />
                                            </Button>
                                            <StyledMenu
                                                id="demo-customized-menu"
                                                MenuListProps={{
                                                    "aria-labelledby": "demo-customized-button",
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                            >
                                                {subtitle.map((item) => (
                                                    <MenuItem
                                                        key={item}
                                                        className="dropdowndetails"
                                                        onClick={() => handleClose(item.text)}
                                                        disableRipple
                                                    >
                                                        {item.imgs}
                                                        {item.text}
                                                    </MenuItem>
                                                ))}
                                            </StyledMenu>
                                        </td>
                                    </tr>
                                )}
                            

                            
                                {product.map((prod, index) =>
                                    <tr style={{}} key={index}>
                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.purpose}
                                            <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>Cash pickup</span>
                                        </td>

                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.amount}
                                            <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>In review</span>
                                        </td>

                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                            <img src={prod.flagone} alt="" className={styles.flagstyle} />
                                            <span className={styles.flagnamestyle} >{prod.flagnameone}</span>
                                            <span className={styles.dash}>-</span>
                                            <img src={prod.flagtwo} alt="" className={styles.flagstyle} />
                                            <span className={styles.flagnamestyle}>{prod.flagnametwo}</span>
                                        </td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                            {prod.datetime}
                                            <div className={styles.tableparagraph}>{prod.sendingMethod}</div>
                                        </td>
                                        <td className={styles.tabledataa} style={{ paddingTop: "1em" }}>
                                            <button className={styles.completedbtn}>Completed</button>
                                        </td>
                                        <td className={styles.tabledatas} style={{ paddingTop: "1em" }}>
                                            <Button
                                                id="demo-customized-button"
                                                aria-controls={openCompleted ? "demo-customized-menu" : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={openCompleted ? "true" : undefined}
                                                variant="contained"
                                                disableElevation
                                                onClick={handleBtnCompleted}
                                                className="btntable"
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <img src={ellip} alt="" />
                                            </Button>
                                            <StyledMenu
                                                id="demo-customized-menu"
                                                MenuListProps={{
                                                    "aria-labelledby": "demo-customized-button",
                                                }}
                                                anchorCompletedEl={anchorCompletedEl}
                                                open={openCompleted}
                                                onClose={handleCloseCompleted}
                                            >
                                                {subtitlecompleted.map((itemcompleted) => (
                                                    <MenuItem
                                                        key={itemcompleted}
                                                        className="dropdowndetails"
                                                        onClick={() => handleCloseCompleted(itemcompleted.text)}
                                                        disableRipple
                                                    >
                                                        {itemcompleted.imgs}
                                                        {itemcompleted.text}
                                                    </MenuItem>
                                                ))}
                                            </StyledMenu>
                                        </td>
                                    </tr>
                                )}
                            


                           
                                {product.map((prod, index) =>
                                    <tr style={{}} key={index}>
                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.purpose}
                                            <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>Cash pickup</span>
                                        </td>

                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.amount}
                                            {/* <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>In review</span> */}
                                        </td>

                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                            <img src={prod.flagone} alt="" className={styles.flagstyle} />
                                            <span className={styles.flagnamestyle} >{prod.flagnameone}</span>
                                            <span className={styles.dash}>-</span>
                                            <img src={prod.flagtwo} alt="" className={styles.flagstyle} />
                                            <span className={styles.flagnamestyle}>{prod.flagnametwo}</span>
                                        </td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                            {prod.datetime}
                                            <div className={styles.tableparagraph}>{prod.sendingMethod}</div>
                                        </td>
                                        <td className={styles.tabledataa} style={{ paddingTop: "1em" }}>
                                            <button className={styles.cancelledbtn}>Cancelled</button>
                                        </td>
                                        <td className={styles.tabledatas} style={{ paddingTop: "1em" }}>
                                            <Button
                                                id="demo-customized-button"
                                                aria-controls={openCancelled ? "demo-customized-menu" : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={openCancelled ? "true" : undefined}
                                                variant="contained"
                                                disableElevation
                                                onClick={handleBtnCancelled}
                                                className="btntable"
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <img src={ellip} alt="" />
                                            </Button>
                                            <StyledMenu
                                                id="demo-customized-menu"
                                                MenuListProps={{
                                                    "aria-labelledby": "demo-customized-button",
                                                }}
                                                anchorCancelledEl={anchorCancelledEl}
                                                open={openCancelled}
                                                onClose={handleCloseCancelled}
                                            >
                                                {subtitlecancelled.map((itemcancelled) => (
                                                    <MenuItem
                                                        key={itemcancelled}
                                                        className="dropdowndetails"
                                                        onClick={() => handleCloseCancelled(itemcancelled.text)}
                                                        disableRipple
                                                    >
                                                        {itemcancelled.imgs}
                                                        {itemcancelled.text}
                                                    </MenuItem>
                                                ))}
                                            </StyledMenu>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.inner}>
                        {product.length < 1 && (
                            <div>
                                <img src={holder} alt="middleimage" />
                                <div className={styles.nocurrency}>
                                    No currency
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransactionSection;

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));