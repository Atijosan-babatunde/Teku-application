import styles from "../dashboard/css/dashboard.module.scss";
import boxoneimg from "../../../assets/png/boxoneimg.png";
import put from "../../../assets/svg/put.svg";
import blank from "../../../assets/svg/blank.svg";
import globe from "../../../assets/svg/globe.svg";
import holder from "../../../assets/svg/holder.svg";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import TransferModal from "../currency-rate/TransferMoneyModal/transferModal";
import eye from "../../../assets/svg/eye.svg";
import makeappeal from "../../../assets/svg/makeappeal.svg";
import download from "../../../assets/svg/download.svg";
import ellip from "../../../assets/png/ellis.png";
import Button from "@mui/material/Button";
import { useAppSelector } from "../../../shared/redux/reduxHooks";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import PreviewModal from "../payment-cart/previewModal";
import PaymentRequestModal from "../currency-rate/RequestModal/paymentRequestModal";
import DeletePaymentModal from "../payment-cart/deletePaymentModal";
import { useNavigate } from "react-router-dom";
import KycBusinessUser from "../../SignUPDashboard/personal_business_registration/business/KYC/kycBusinessUser";
import KycPersonalUser from "../../SignUPDashboard/personal_business_registration/personal/KYC/kycPersonalUser";
import { useDispatch } from "react-redux";
import { GetUsersDatas } from "../../../shared/redux/slices/users.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import customAxios from "../../../shared/utils/axios";
import { formatDate } from "../../../shared/utils/formatDate";
import { formatMoney } from "../../../shared/utils/moneyFormat";

const Dashboard = () => {
  const [saveItemModal, setSaveItemModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [transactionsData, setTransactionsData] = useState();
  const userData = useAppSelector((state) => state.users.getUsersData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();

  const handleBtn = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data] = useState(userData);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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

  const getUser = () => {
    setLoading(true);
    dispatch(GetUsersDatas())
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


  const handleClose = (item) => {
    setAnchorEl(null);
    if (item === "Preview") {
      setShowModalPreview(true);
      setSaveItemModal(item);
    }

    if (item === "Pay now") {
      setPayModal(true);
      setSaveItemModal(item);
    }

    if (item === "Delete") {
      setDeleteModal(true);
      setSaveItemModal(item);
    }
  };

  const [subtitle] = useState([
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
      id: 3,
      imgs: <img src={download} className={styles.icon} alt="img" />,
      text: "Download Receipt",
    },
    {
      id: 4,
      imgs: <img src={download} className={styles.icon} alt="img" />,
      text: "Proof of payment",
    },
  ]);

  // MODAL STATE

  const [showModalPreview, setShowModalPreview] = useState(false);
  const [payModal, setPayModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  function handleModalShow() {
    setShowModalPreview(!showModalPreview);
    setDeleteModal(!deleteModal);
    setPayModal(!payModal);
  }

  function handleModalShowPreview() {
    setShowModalPreview(!showModalPreview);
    setDeleteModal(!deleteModal);
    setPayModal(!payModal);
  }

  // MODAL STATE MONEY TRANSFER
  function handleModalShowTransfer() {
    setShowModal(!showModal);
  }

  // MODAL STATE FOR REQUEST
  // function handleModalShowRequest() {
  //   setShowModalRequest(!showModalRequest);
  // }

  const goToCurrencyPage = () => {
    navigate("/currency-rate");
  };

  const goToTransaction = () => {
    navigate("/transactions");
  };


  const [showModalKyc, setShowModalKyc] = useState(false);

  function handleModalShowKyc() {
    setShowModalKyc(!showModalKyc);
  }

  return (
    <>
      {showModalPreview && saveItemModal === "Preview" && (
        <PreviewModal {...{ handleModalShowPreview }} />
      )}
      {payModal && saveItemModal === "Pay now" && (
        <PaymentRequestModal {...{ handleModalShow }} />
      )}
      {deleteModal && saveItemModal === "Delete" && (
        <DeletePaymentModal {...{ handleModalShow }} />
      )}

      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.contenthead}>
            <h1>Welcome {data?.firstName}</h1>
            <p>Make your seamless transfer today!</p>
          </div>
          <img src={globe} alt="" />
          {loading && (
            <ReactLoading color="blue" width={25} height={25} type="spin" />
          )}
        </div>
        <div className={styles.contentinside}>
          <div className={styles.boxone}>
            <div className={styles.boxoneflex}>
              <h2>Make a quick transfer</h2>
              <img src={boxoneimg} alt="" />
            </div>
            <p className={styles.boxonepara}>
              Send money to all individual across the continent.
            </p>

            <div className={styles.requestbut}>
              <button
                className={styles.btnrequest}
                onClick={handleModalShowTransfer}
              >
                Transfer money
              </button>
            </div>
            {showModal && <TransferModal {...{ handleModalShowTransfer }} />}
          </div>

          <div className={styles.boxone}>
            <div className={styles.boxoneflex}>
              <h2>Make a custom request</h2>
              <img src={put} alt="" />
            </div>
            <p className={styles.boxonepara}>
              We offer you opportunity to make a currency request.
            </p>

            <div className={styles.requestbut}>
              <button
                className={styles.btnrequestcustomise}
                onClick={goToCurrencyPage}
              >
                Customised request
              </button>
              {/* {showModalRequest && (
                <RequestModal {...{ handleModalShowRequest }} />
              )} */}
            </div>
          </div>

          <div className={styles.boxone}>
            <div className={styles.boxoneflex}>
              <h2>View today’s rate</h2>
              <img src={blank} alt="" />
            </div>
            <p className={styles.boxonepara}>
              Check out updated and available rate.
            </p>

            <div className={styles.requestbut}>
              <button className={styles.btnrequest} onClick={goToCurrencyPage}>
                View rate
              </button>
            </div>
          </div>
        </div>

        {userData?.kycVerified ? null : (
          <div className={styles.kycreg}>
            <div className={styles.kyccontent}>
              <h1 className={styles.kych1}>KYC Verification</h1>
              <div className={styles.kycflex}>
                <p>
                  You have not done your KYC Verification. Therefore some
                  features are being restricted. Kindly start your KYC
                  Verification process to continue using this application.
                </p>

                <h3 onClick={handleModalShowKyc}>
                  Start KYC Verification{" "}
                  <IoIosArrowForward className={styles.arrow} />
                </h3>
              </div>
              {showModalKyc ? (
                userData?.accountType === "PERSONAL" ? (
                  <KycPersonalUser {...{ handleModalShowKyc }} />
                ) : (
                  <KycBusinessUser {...{ handleModalShowKyc }} />
                )
              ) : null}
            </div>
          </div>
        )}

        <div className={styles.contenttable}>
          <div className={styles.tableheader}>
            <h1 className={styles.headerh1}>Recent transactions</h1>
            <p onClick={goToTransaction}>
              See all <IoIosArrowForward />
            </p>
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
                {transactionsData &&
                  transactionsData.map((prod, first) => (
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
                        {formatMoney(prod.amount, prod.pairCurrency.code)}
                        <span
                          className={styles.insidebtn}
                          style={{
                            backgroundColor: "rgba(240, 243, 255, 1)",
                            borderRadius: "100px",
                            width: "160px",
                          }}
                        >
                          Paid
                        </span>
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
                  ))}
              </tbody>
            </table>
          </div>
          <div className={styles.inner}>
            {!transactionsData && (
              <div>
                <img src={holder} alt="middleimage" />
                <div className={styles.nocurrency}>
                  You have not performed any transaction
                </div>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Dashboard;

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
