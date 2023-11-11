/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../recipients/css/recipientsectiontable.module.scss";
import holder from "../../../assets/svg/recipientholder.svg";
import { useEffect, useState } from "react";
import attachment from "../../../assets/png/attached.png";
import eye from "../../../assets/svg/eye.svg";
import flyarrow from "../../../assets/svg/flyarrow .svg";
import deleteimg from "../../../assets/svg/delete.svg";
import download from "../../../assets/svg/download.svg";
import ellip from "../../../assets/png/ellis.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { GetRecipientUsersData } from "../../../shared/redux/slices/recipient.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import customAxios from "../../../shared/utils/axios";
import { truncateMiddle } from "../../../shared/utils/truncate";

const RecipientSectionTable = () => {
  const [saveItemModal, setSaveItemModal] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  //   const recipientData = useAppSelector(
  //     (state) => state.transaction.getRecipientUsersData
  //   );
  const [data, setData] = useState([]);

  const getRecipientUser = () => {
    setLoading(true);
    dispatch(GetRecipientUsersData())
      .unwrap()
      .then((res) => {
        setData(res.recipient);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    getRecipientUser();
  }, []);

  const [product] = useState([
    {
      id: 1,
      attachment: (
        <img src={attachment} className={styles.attachment} alt="fla" />
      ),
      paymentdocument: "Document attached",
      country: "China",
      purpose: "Tuition fees",
      paymentdescription: "Coventry university, ...",
      process: "Processing Time: Within 24hrs",
      action: "",
    },
  ]);

  const [subtitle] = useState([
    {
      id: 1,
      imgs: <img src={eye} className={styles.icon} alt="imgone" />,
      text: "Edit",
    },
    {
      id: 2,
      imgs: <img src={flyarrow} className={styles.icon} alt="imgtwo" />,
      text: "Transfer money",
    },
    {
      id: 3,
      imgs: <img src={download} className={styles.icon} alt="imgthree" />,
      text: "Download document",
    },
    {
      id: 3,
      imgs: <img src={deleteimg} className={styles.icon} alt="imgfour" />,
      text: "Delete",
    },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleBtn = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteRecipient = async (entity) => {
    try {
      const response = await customAxios.delete(`recipient/${entity?.id}`);
      console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleClose = (item, entity) => {
    setAnchorEl(null);
    if (item === "Preview") {
      setShowModal(true);
      setSaveItemModal(item);
    }

    if (item === "Pay now") {
      setPayModal(true);
      setSaveItemModal(item);
    }

    if (item === "Delete") {
      setDeleteModal(true);
      handleDeleteRecipient(entity);
    }
  };

  // MODAL STATE

  const [showModal, setShowModal] = useState(false);
  const [payModal, setPayModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  function handleModalShow() {
    setShowModal(!showModal);
    setDeleteModal(!deleteModal);
    setPayModal(!payModal);
  }

  if (data) {
    return (
      <>
        {/* {showModal && saveItemModal === 'Preview' && <PreviewModal {...{ handleModalShow }} />}
            {payModal && saveItemModal === 'Pay now' && <StepFourRequestModal {...{handleModalShow}}/>}
            {deleteModal && saveItemModal === 'Delete' && <DeletePaymentModal {...{ handleModalShow }} />} */}

        <div className={styles.parent}>
          <div className={styles.contenttable}>
            <div className="table-responsive">
              <table className="table table-striped table-borderless">
                <thead className={styles.tablerow}>
                  <tr>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{
                        paddingLeft: "2em",
                        padding: "1.5000em",
                        borderRadius: "16px 0px 0px 0px",
                      }}
                    >
                      {" "}
                      Purpose of payment
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ paddingLeft: "4.1000em", padding: "1.5000em" }}
                    >
                      Country
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ padding: "1.5000em" }}
                    >
                      Payment document
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{ padding: "1.5000em" }}
                    >
                      Payment description
                    </th>
                    <th
                      className={styles.tablehead}
                      scope="col"
                      style={{
                        padding: "1.5000em",
                        borderRadius: "0px 16px 0px 0px",
                      }}
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((prod, index) => (
                    <tr key={index}>
                      <td
                        className={styles.tabledata}
                        style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}
                      >
                        {prod.paymentPurpose}
                        <span
                          className={styles.insidebtn}
                          style={{
                            backgroundColor: "rgba(240, 243, 255, 1)",
                            borderRadius: "100px",
                            width: "160px",
                          }}
                        >
                          {prod.paymentMethod}
                        </span>
                      </td>

                      <td
                        className={styles.tabledata}
                        style={{
                          paddingLeft: "4.5000em",
                          paddingTop: "1.5000em",
                        }}
                      >
                        {prod.country}
                      </td>

                      <td
                        className={styles.tabledata}
                        style={{ paddingTop: "1.5000em", paddingLeft: "2em" }}
                      >
                        {truncateMiddle(prod.paymentDocument, 15)}
                      </td>
                      <td
                        className={styles.tabledataa}
                        style={{ paddingTop: "1.5000em", paddingLeft: "2em" }}
                      >
                        {truncateMiddle(prod.paymentDescription, 15)}
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
                              onClick={() => handleClose(item.text, prod)}
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
            {loading && (
              <ReactLoading color="blue" width={25} height={25} type="spin" />
            )}
            <div className={styles.inner}>
              {product.length < 1 && (
                <div>
                  <img src={holder} alt="middleimage" />
                  <div className={styles.nocurrency}>No saved beneficiary</div>
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

export default RecipientSectionTable;

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
