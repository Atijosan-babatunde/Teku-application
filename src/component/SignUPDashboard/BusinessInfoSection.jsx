import React from "react";
import styles from "../SignUPDashboard/CSS/userprofilesections.module.scss";
import ReactLoading from "react-loading";
import { LuFileEdit } from "react-icons/lu";
import business from "../../assets/png/business.png";

const BusinessInfoSection = ({ data, loading }) => {
    return (
      <>
        <div className={styles.content}>
          <div className={styles.cardholder}>
            <div className={styles.userimg}>
              <img src={business} alt="" className={styles.userpassportimg} />
              {/* <span><AiOutlinePicture/></span> */}
            </div>
            <div className={styles.username}>
              <div className={styles.name}>{data?.businessName}</div>
              <div className={styles.country}>
                <div className={styles.countryh1}>{data?.country}</div>
              </div>
            </div>
          </div>
          {loading && (
            <ReactLoading color="blue" width={25} height={25} type="spin" />
          )}
        </div>
  
        <div className={styles.content}>
          <div className={styles.contenthead}>
            <div className={styles.contenth2}>Business Information</div>
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
                <div className={styles.firstdivh1}>Business name</div>
                <input
                  type="text"
                  className={styles.firstp}
                  value={data?.firstName}
                />
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Business type</div>
                <input
                  type="text"
                  className={styles.firstp}
                  value={data?.lastName}
                />
              </div>
            </div>
  
            <div className={styles.firstdivflex}>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Email address</div>
                <input
                  type="email"
                  className={styles.firstp}
                  value={data?.email}
                />
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}> Country of business</div>
                <input
                  type="text"
                  className={styles.firstp}
                  value={data?.country}
                />
              </div>
            </div>
          </div>
          {loading && (
            <ReactLoading color="blue" width={25} height={25} type="spin" />
          )}
        </div>
  
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
                <div className={styles.firstdivh1}>RC Number</div>
                <div className={styles.firstp}>Completed</div>
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Business verification</div>
                <div className={styles.firstp}>Completed</div>
              </div>
            </div>
  
            <div className={styles.firstdivflex}>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Business address</div>
                <div className={styles.firstp}>Completed</div>
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Address verification</div>
                <div className={styles.firstp}>Completed</div>
              </div>
            </div>
  
            <div className={styles.firstdivflex}>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>No. of directors</div>
                <div className={styles.firstp}>
                  5 Allen Avenue street, Lagos, Nigeria
                </div>
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Phone number verification</div>
                <div className={styles.firstp}>Completed</div>
              </div>
            </div>
          </div>
        </div>
  
        <div className={styles.content}>
          <div className={styles.contenthead}>
            <div className={styles.contenth2}>Director 1 identification</div>
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
                <div className={styles.firstdivh1}>BVN Verification</div>
                <div className={styles.firstp}>Completed</div>
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Document</div>
                <div className={styles.firstp}>Completed</div>
              </div>
            </div>
  
            <div className={styles.firstdivflex}>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>ID Selfie</div>
                <div className={styles.firstp}>Completed</div>
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Phone number verification</div>
                <div className={styles.firstp}>Completed</div>
              </div>
            </div>
  
            <div className={styles.firstdivflex}>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Address</div>
                <div className={styles.firstp}>
                  5 Allen Avenue street, Lagos, Nigeria
                </div>
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>Address verification</div>
                <div className={styles.firstp}>Completed</div>
              </div>
            </div>
          </div>
        </div>
  
        <div className={styles.content}>
          <div className={styles.contenthead}>
            <div className={styles.contenth2}> Director 2 Identification</div>
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
                <div className={styles.firstdivh1}>Document</div>
                <div className={styles.firstp}>Completed</div>
              </div>
              <div className={styles.firstname}>
                <div className={styles.firstdivh1}>ID Selfie</div>
                <div className={styles.firstp}>Completed</div>
              </div>
            </div>
          </div>
        </div>
  
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
      </>
    );
  };

  export default BusinessInfoSection;