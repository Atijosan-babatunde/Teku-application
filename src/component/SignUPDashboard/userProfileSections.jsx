import styles from "../SignUPDashboard/CSS/userprofilesections.module.scss";
import takepic from "../../assets/svg/takepic.svg";
import { LuFileEdit } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { useAppSelector } from "../../shared/redux/reduxHooks";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef, useState } from "react";
import ReactLoading from "react-loading";
import KycBusinessUser from "./personal_business_registration/business/KYC/kycBusinessUser";
import BusinessInfoSection from "./BusinessInfoSection";
import customAxios from "../../shared/utils/axios";
import KycPersonalUser from "./personal_business_registration/personal/KYC/kycPersonalUser";
import useCloudinaryImageUpload from "../../shared/Hooks/useCloudinaryImageUpload";

const UserProfileSections = () => {
  const [loading, setLoading] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const [uploadImage] = useCloudinaryImageUpload();

  const dispatch = useDispatch();
  const data = useAppSelector((state) => state.users.getUsersData);
  console.log("USER PROFILE", data);
  // const [data] = useState(userData);
  const [formData, setFormData] = useState({
    email: data.email,
    businessName: data?.businessName,
    password: data?.password,
    firstName: data?.firstName,
    lastName: data?.lastName,
    country: data?.country,
    profilePicture:
      data.profilePicture ?? `${data?.firstName[0]} ${data?.lastName[0]}`,
    accountType: data?.accountType,
  });

  console.log(formData);

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        setLoading(true);
        let pictureUrl = await uploadImage(formData.profilePicture);
        setFormData({ ...formData, profilePicture: pictureUrl });

        const response = await customAxios.put(`users/update`, formData);
        console.log(response);
        toast.success("User Profile updated successfully");
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  const updateUserProfile = async () => {
    try {
      setLoading(true);
      let pictureUrl = "";

      if (formData.profilePicture instanceof File) {
        pictureUrl = await uploadImage(formData.profilePicture);
        setFormData({ ...formData, profilePicture: pictureUrl });
      }

      const response = await customAxios.put(`users/update`, formData);
      console.log(response);
      toast.success("User Profile updated successfully");
      setLoading(false);
      setUserEdit(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [showModalKyc, setShowModalKyc] = useState(false);

  function handleModalShowKyc() {
    setShowModalKyc(!showModalKyc);
  }

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const imageInput = useRef(null);

  const handleClickimg = (reference) => {
    reference.current.click();
  };

  return (
    <div className={styles.parent}>
      <div>
        <div className={styles.content}>
          <div className={styles.cardholder}>
            <div
              className={styles.userimg}
              onClick={() => handleClickimg(imageInput)}
            >
              <input
                type="file"
                ref={imageInput}
                onChange={(e) => handleProfilePictureChange(e)}
                style={{ display: "none" }}
                accept=".png,.jpeg,.jpg"
              />
              {data.profilePicture ? (
                <img
                  src={data.profilePicture}
                  alt="User Profile"
                  className={styles.userpassportimg}
                />
              ) : (
                <span className={styles.userimgspan}>
                  {formData.profilePicture}
                  <div className={styles.imghold}>
                    <img
                      src={takepic}
                      alt="docpic"
                      className={styles.relativeicon}
                    />
                  </div>
                </span>
              )}
            </div>

            <div className={styles.username}>
              <div className={styles.name}>
                {data?.firstName} {data?.lastName}
              </div>
              <div className={styles.country}>
                <div className={styles.countryh1}>{data?.country}</div>
              </div>
            </div>
          </div>
          {loading && (
            <ReactLoading color="blue" width={25} height={25} type="spin" />
          )}
        </div>
        {data?.kycVerified ? null : (
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
                data?.accountType === "PERSONAL" ? (
                  <KycPersonalUser {...{ handleModalShowKyc }} />
                ) : (
                  <KycBusinessUser {...{ handleModalShowKyc }} />
                )
              ) : null}
            </div>
          </div>
        )}

        {data?.accountType === "PERSONAL" ? (
          <>
            <UserInfoSection
              data={data}
              loading={loading}
              formData={formData}
              userEdit={userEdit}
              setUserEdit={setUserEdit}
              handleChange={handleChange}
              updateUserProfile={updateUserProfile}
            />
            <IdentificationSection data={data} />
            <PasswordSection />
          </>
        ) : (
          <BusinessInfoSection data={data} loading={loading} />
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

const UserInfoSection = ({
  loading,
  handleChange,
  formData,
  userEdit,
  setUserEdit,
  updateUserProfile,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.contenthead}>
        <div className={styles.contenth2}>Personal Information</div>
        <div className={styles.editholder}>
          {userEdit ? (
            <p onClick={updateUserProfile}> Done</p>
          ) : (
            <div className={styles.edith1} onClick={() => setUserEdit(true)}>
              <LuFileEdit className={styles.icon} />
              Edit
            </div>
          )}
        </div>
      </div>

      <div className={styles.contentdata}>
        <div className={styles.firstdivflex}>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}>First name</div>
            <input
              disabled={userEdit ? false : true}
              type="text"
              name="firstName"
              className={styles.firstp}
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}> Last name</div>
            <input
              disabled={userEdit ? false : true}
              type="text"
              name="lastName"
              className={styles.firstp}
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.firstdivflex}>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}>Email address</div>
            <input
              type="email"
              name="email"
              className={styles.firstp}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}> Country of nationality</div>
            <input
              disabled={userEdit ? false : true}
              type="text"
              name="country"
              className={styles.firstp}
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {loading && (
        <ReactLoading color="blue" width={25} height={25} type="spin" />
      )}
    </div>
  );
};

const IdentificationSection = ({ data }) => {
  return (
    <div className={styles.content}>
      <div className={styles.contenthead}>
        <div className={styles.contenth2}>Identification</div>
        <div className={styles.editholder}>
          <div className={styles.edith1}>
            <LuFileEdit className={styles.icon} />
            Edit
          </div>
        </div>
      </div>

      <div className={styles.contentdata}>
        <div className={styles.firstdivflex}>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}>BVN Verifcation</div>
            <div className={styles.firstp}>
              {data.Personalkycverification[0]?.bvn_no
                ? "Completed"
                : "Pending"}
            </div>
          </div>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}> Document</div>
            <div className={styles.firstp}>
              {data.Personalkycverification[0]?.document
                ? "Completed"
                : "Pending"}
            </div>
          </div>
        </div>

        <div className={styles.firstdivflex}>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}>ID Selfie</div>
            <div className={styles.firstp}>
              {data.Personalkycverification[0]?.picture
                ? "Completed"
                : "Pending"}
            </div>
          </div>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}>Phone number verification</div>
            <div className={styles.firstp}>
              {data.Personalkycverification[0]?.phone_no
                ? "Completed"
                : "Pending"}
            </div>
          </div>
        </div>

        <div className={styles.firstdivflex}>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}>Address</div>
            <div className={styles.firstp}>
              {data.Personalkycverification[0]?.address ?? "Not set"}
            </div>
          </div>
          <div className={styles.firstname}>
            <div className={styles.firstdivh1}>Address verification</div>
            <div className={styles.firstp}>
              {data.Personalkycverification[0]?.proof_of_address
                ? "Completed"
                : "Pending"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PasswordSection = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contenthead}>
        <div className={styles.contenth2}>Password</div>
        <div className={styles.changepass}>
          <div className={styles.changepassh1}>
            <LuFileEdit className={styles.icon} />
            Change password
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSections;
