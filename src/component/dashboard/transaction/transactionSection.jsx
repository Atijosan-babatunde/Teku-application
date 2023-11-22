/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../transaction/css/transactionsection.module.scss";
import { useEffect, useState } from "react";
import holder from "../../../assets/svg/holder.svg";
import Nigeria from "../../../assets/svg/nigeria.svg";
import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg";
import eye from "../../../assets/svg/eye.svg";
import ellip from "../../../assets/png/ellis.png";
import makeappeal from "../../../assets/svg/makeappeal.svg";
import download from "../../../assets/svg/download.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import { FiSearch } from "react-icons/fi";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import TransactionPreview from "./transactionPreviewModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MakeAnAppeal from "./makeAnAppeal";
import { MdArrowDropDown } from "react-icons/md";
import TransferModal from "../currency-rate/TransferMoneyModal/transferModal";
import customAxios from "../../../shared/utils/axios";
import { formatMoney } from "../../../shared/utils/moneyFormat";
import { formatDate } from "../../../shared/utils/formatDate";

const TransactionSection = () => {
  const [days, setDays] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("Last 7 days");
  const [searchValue, setSearchValue] = useState("");
  const [saveItemModal, setSaveItemModal] = useState("");
  // const [saveItemModalCompleted, setSaveItemModalCompleted] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  // const [anchorCancelledEl, setAnchorCancelledEl] = useState(null);
  const [transactionsData, setTransactionsData] = useState(null);
  // const openCancelled = Boolean(anchorCancelledEl);
  // const [anchorCompletedEl, setAnchorCompletedEl] = useState(null);
  // const openCompleted = Boolean(anchorCompletedEl);
  const open = Boolean(anchorEl);
  const [loading, setLoading] = useState(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState();

  const [periods] = useState([
    { id: 1, period: "Past 24 hours" },
    { id: 2, period: "Last 7 days" },
    { id: 3, period: "past month" },
    { id: 4, period: "Custom date" },
  ]);

  const changeValue = async (e) => {
    setDropDownValue(e.period);
    // updateQueryParams({ days: e.id });
  };

  const handleBtn = (event, submenu) => {
    setAnchorEl(event.currentTarget);
    setSelectedTransaction(submenu);
    setSelectedSubmenu(submenu.status);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    setSelectedSubmenu([]);

    if (item === "Preview") {
      setShowModalPreview(true);
      setSaveItemModal(item);
    }

    if (item === "Request again") {
      setRequestAgainModal(true);
      setSaveItemModal(item);
    }

    if (item === "Make an appeal") {
      setMakeAppealModal(true);
      setSaveItemModal(item);
    }
  };

  useEffect(() => {
    getTransactionUser(); // Pass the searchValue to fetch transactions
  }, [searchValue]);

  const getTransactionUser = async () => {
    setLoading(true);

    try {
      setLoading(true);
      const response = await customAxios.get(
        `/transaction/users/personal?search=${searchValue}`
      );
      console.log(response);
      setTransactionsData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const [product] = useState([
    {
      id: 1,
      flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />,
      flagnameone: "NGN",
      flagtwo: (
        <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />
      ),
      flagnametwo: "GBP",
      amount: "1,000.00",
      purpose: "Tuition fees",
      datetime: "21-12-2021, 10:38am",
      process: "Processing Time: Within 24hrs",
      action: "",
    },
  ]);

  const subtitlecancelled = [
    {
      id: 1,
      imgs: <img src={eye} className={styles.icon} alt="img" />,
      text: "Preview",
    },
    {
      id: 2,
      imgs: <img src={makeappeal} className={styles.icon} alt="img" />,
      text: "Request again",
    },
  ];

  const subtitlecompleted = [
    {
      id: 1,
      imgs: <img src={eye} className={styles.icon} alt="img" />,
      text: "Preview",
    },
    {
      id: 2,
      imgs: <img src={makeappeal} className={styles.icon} alt="img" />,
      text: "Make an appeal",
    },
    {
      id: 4,
      imgs: <img src={download} className={styles.icon} alt="img" />,
      text: "Proof of payment",
    },
  ];

  const subtitle = [
    {
      id: 1,
      imgs: <img src={eye} className={styles.icon} alt="eye" />,
      text: "Preview",
    },
  ];

  const getSubmenu = () => {
    switch (selectedSubmenu) {
      case "REFUNDED":
        return subtitle;
      case "CANCELLED":
        return subtitlecancelled;
      case "SUCCESSFUL":
        return subtitlecompleted;
      case "PROCESSING":
        return subtitlecompleted;
      default:
        return subtitle;
    }
  };

  const [showModalPreview, setShowModalPreview] = useState(false);
  const [requestModal, setRequestAgainModal] = useState(false);
  const [downloadReceiptModal, setDownloadReceiptModal] = useState(false);
  const [makeAppealModal, setMakeAppealModal] = useState(false);

  function handleMakeAnAppeal() {
    setShowModalPreview(!showModalPreview);
    setRequestAgainModal(!requestModal);
    setDownloadReceiptModal(!downloadReceiptModal);
    setMakeAppealModal(!makeAppealModal);
  }

  function handleModalShowTransactionPreview() {
    setShowModalPreview(!showModalPreview);
    setRequestAgainModal(!requestModal);
    setDownloadReceiptModal(!downloadReceiptModal);
    setMakeAppealModal(!makeAppealModal);
  }

  function handleModalShowTransfer() {
    setShowModalPreview(!showModalPreview);
    setRequestAgainModal(!requestModal);
    setDownloadReceiptModal(!downloadReceiptModal);
    setMakeAppealModal(!makeAppealModal);
  }

  if (transactionsData) {
    return (
      <>
        {makeAppealModal && saveItemModal === "Make an appeal" && (
          <MakeAnAppeal {...{ handleMakeAnAppeal }} />
        )}
        {showModalPreview && saveItemModal === "Preview" && (
          <TransactionPreview
            {...{ handleModalShowTransactionPreview }}
            selectedTransaction={selectedTransaction}
          />
        )}
        {requestModal && saveItemModal === "Request again" && (
          <TransferModal {...{ handleModalShowTransfer }} />
        )}

        <div className={styles.parent}>
          <div className={styles.content}>
            <div className={styles.topholder}>
              <div className={styles.contentinner}>
                <h1>Recent transactions</h1>
                <div className={styles.search}>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <span>
                    <FiSearch />
                  </span>
                </div>
              </div>
              <div className={styles.rightholder}>
                <Dropdown
                  isOpen={days}
                  toggle={() => setDays(!days)}
                  style={{ cursor: "pointer" }}
                  className={styles.drop}
                >
                  <DropdownToggle tag="a" className={styles.dropdownToggle}>
                    <div className={styles.dropname}>{dropDownValue}</div>
                    <div className={styles.dropDownrow}>
                      <div style={{ color: "#777E90", marginLeft: "0.4000em" }}>
                        <MdArrowDropDown style={{ fontSize: "2em" }} />
                      </div>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu
                    className="dropdown-menu-end btn-rounded"
                    style={{
                      marginTop: "1em",
                      color: "black",
                      height: "150px",
                      overflow: "auto",
                    }}
                  >
                    {periods.map((period, index) => (
                      <DropdownItem
                        className={styles.value}
                        key={index}
                        onClick={() => changeValue(period)}
                      >
                        {period.period}{" "}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-borderless">
                <thead className={styles.tablerow}>
                  <tr>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}
                    >
                      {" "}
                      Purpose of payment
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}
                    >
                      Amount
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ paddingBottom: "1.5000em" }}
                    >
                      Currency pair
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ paddingBottom: "1.5000em" }}
                    >
                      Date & time
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ paddingBottom: "1.5000em" }}
                    >
                      Status
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ paddingBottom: "1.5000em" }}
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {transactionsData.map((prod, first) => (
                    <tr style={{}} key={first}>
                      <td
                        className={styles.tabledata}
                        style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}
                      >
                        {prod.purpose}
                        <span
                          className={styles.insidebtn}
                          style={{ textTransform: "capitalize" }}
                        >
                          {prod.paymentMethod
                            .split("_")
                            ?.join(" ")
                            .toLowerCase()}
                        </span>
                      </td>

                      <td
                        className={styles.tabledata}
                        style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}
                      >
                        {formatMoney(prod.amount, prod.baseCurrency.code)}
                        <span className={styles.insidebtnpaid}>Paid</span>
                      </td>

                      <td
                        className={styles.tabledata}
                        style={{ paddingTop: "1.5000em" }}
                      >
                        <img
                          src={prod.baseCurrency.icon}
                          alt=""
                          className={styles.flagstyle}
                        />
                        <span className={styles.flagnamestyle}>
                          {prod.baseCurrency.code}
                        </span>
                        <span className={styles.dash}>-</span>
                        <img
                          src={prod.pairCurrency.icon}
                          alt=""
                          className={styles.flagstyle}
                        />
                        <span className={styles.flagnamestyle}>
                          {prod.pairCurrency.code}
                        </span>
                      </td>
                      <td
                        className={styles.tabledata}
                        style={{ paddingTop: "1.5000em" }}
                      >
                        {formatDate(prod.createdAt)}
                      </td>
                      <td
                        className={styles.tabledataa}
                        style={{ paddingTop: "1em" }}
                      >
                        <button
                          className={
                            prod.status === "CANCELLED"
                              ? styles.cancelledbtn
                              : prod.status === "PROCESSING"
                              ? styles.btn
                              : styles.completedbtn
                          }
                        >
                          {prod.status}
                        </button>
                      </td>
                      <td
                        className={styles.tabledatas}
                        style={{ paddingTop: "1em" }}
                      >
                        <Button
                          id="demo-customized-button"
                          aria-controls={
                            open ? "demo-customized-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          variant="contained"
                          disableElevation
                          onClick={(event) => handleBtn(event, prod)}
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
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          {getSubmenu().map((item) => (
                            <MenuItem
                              key={item.id}
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
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.inner}>
              {product.length < 1 && (
                <div>
                  <img src={holder} alt="middleimage" />
                  <div className={styles.nocurrency}>No currency</div>
                </div>
              )}
            </div>
          </div>
          <ToastContainer />
        </div>
      </>
    );
  }
};

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
