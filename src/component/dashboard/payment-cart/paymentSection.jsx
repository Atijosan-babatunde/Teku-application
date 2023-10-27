import { FiSearch } from 'react-icons/fi'
import styles from '../payment-cart/css/paymentsection.module.scss'
import { useEffect, useState } from 'react';
import holder from "../../../assets/svg/holder.svg"
import Nigeria from "../../../assets/svg/nigeria.svg"
import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg"
import eye from '../../../assets/svg/eye.svg'
import flyarrow from '../../../assets/svg/flyarrow .svg'
import deleteimg from '../../../assets/svg/delete.svg'
import ellip from '../../../assets/png/ellis.png'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import PreviewModal from './previewModal';
import DeletePaymentModal from './deletePaymentModal';
import PaymentRequestModal from '../currency-rate/RequestModal/paymentRequestModal';
import { useAppSelector } from '../../../shared/redux/reduxHooks';
import { useDispatch } from 'react-redux';
import { GetAllTransactionCart } from "../../../shared/redux/slices/transaction.slices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const PaymentSection = () => {
    const [saveItemModal, setSaveItemModal] = useState('')
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const getAllTransaction = useAppSelector((state) => state.transaction.getAllTransactionCart)
    const [data] = useState(getAllTransaction)

    useEffect(() => {
        getAllTransactionCart();
    }, [data]);



    const getAllTransactionCart = () => {
        setLoading(true);
        dispatch(GetAllTransactionCart())
            .unwrap()
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setLoading(false);
            });
    };


    const [product] = useState([
        { id: 1, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', amount: '1,000.00', purpose: 'Tuition fees', datetime: '21-12-2021, 10:38am', process: 'Processing Time: Within 24hrs', action: '' },
    ])

    const [subtitle] = useState([
        { id: 1, imgs: <img src={eye} className={styles.icon} alt='' />, text: 'Preview' },
        { id: 2, imgs: <img src={flyarrow} className={styles.icon} alt='' />, text: 'Pay now' },
        { id: 3, imgs: <img src={deleteimg} className={styles.icon} alt='' />, text: 'Delete' },
    ])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleBtn = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (item) => {
        setAnchorEl(null);
        if (item === 'Preview') {
            setShowModal(true)
            setSaveItemModal(item)
        }

        if (item === 'Pay now') {
            setPayModal(true)
            setSaveItemModal(item)
        }

        if (item === 'Delete') {
            setDeleteModal(true)
            setSaveItemModal(item)
        }
    }

    // MODAL STATE

    const [showModal, setShowModal] = useState(false)
    const [payModal, setPayModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    function handleModalShow() {
        setShowModal(!showModal)
        setDeleteModal(!deleteModal)
        setPayModal(!payModal)
    }

    function handleModalShowPreview() {
        setShowModal(!showModal)
        setDeleteModal(!deleteModal)
        setPayModal(!payModal)
    }


    if (data) {
        return (
            <>
                {showModal && saveItemModal === 'Preview' && <PreviewModal {...{ handleModalShowPreview }} />}
                {payModal && saveItemModal === 'Pay now' && <PaymentRequestModal {...{ handleModalShow }} />}
                {deleteModal && saveItemModal === 'Delete' && <DeletePaymentModal {...{ handleModalShow }} />}

                <div className={styles.parent}>
                    <div className={styles.content}>
                        <div className={styles.contentinner}>
                            <h1>Recent transactions</h1>
                            <div className={styles.search}>
                                <input type="text" placeholder="Search" />
                                <span><FiSearch /></span>
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
                                    {data.map((prod, index) =>
                                        <tr key={index}>
                                            <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.purpose}
                                                <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>Cash pickup</span>
                                            </td>

                                            <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.amount}
                                                <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>In review</span>
                                            </td>

                                            <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                                <img src={prod.dropDownValue.icon} alt="" className={styles.flagstyle} />
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
                    <ToastContainer />
                </div>
            </>
        );
    }
}

export default PaymentSection;

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