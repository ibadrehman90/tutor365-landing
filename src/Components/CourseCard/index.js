import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { BASE_URL, STUDENT_PORTAL_PAGE_URL } from "../../App/api";
import "./styles.css";
import StripeCheckout from "react-stripe-checkout";
import LoadingOverlay from "react-loading-overlay";
import CourseImage from "../../Assets/gc_maths.webp";
const CourseCard = ({
  categories = [],
  courseCardImageUrl = CourseImage,
  courseTitle = "From Scratch",
  courseDescription = "Course Description",
  coursePrice = "$31.99",
  subscription,
  isActive,
  setIsActive,
}) => {
  const [localUserData, setLocalUserData] = React.useState({});
  React.useEffect(() => {
    let userData = Cookies.get("user", { domain: ".tutor365.com" });
    let user;
    if (userData?.length) {
      user = JSON.parse(userData);
      setLocalUserData(user);
    }
  }, []);

  function listenCookieChange(callback, interval = 1000) {
    let lastCookie = document.cookie;
    setInterval(() => {
      let cookie = document.cookie;
      if (cookie !== lastCookie) {
        try {
          callback({ oldValue: lastCookie, newValue: cookie });
        } finally {
          lastCookie = cookie;
        }
      }
    }, interval);
  }
  listenCookieChange(({ oldValue, newValue }) => {
    const user = Cookies.get("user");

    if (user) {
      let result = JSON.parse(user);

      setLocalUserData(result);
    } else {
      setLocalUserData({});
    }
  }, 1000);

  const makePayment = async (token) => {
    console.log(token);
    setIsActive(true);
    const body = {
      token,
      subscription,
      user: localUserData,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    console.log(JSON.stringify(token));
    return fetch(`${BASE_URL}/payment/create`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        setIsActive(false);
        alert("Payment Successful");
        window.location.replace(STUDENT_PORTAL_PAGE_URL);
      })
      .catch((err) => {
        console.log(err);
        setIsActive(false);
      });
  };
  console.log("localUserData : ", localUserData);
  return (
    <>
      <div className="CourseCard">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          {categories.length
            ? categories?.map((obj, index) => {
                return (
                  <div
                    style={{
                      marginLeft:
                        index + 1 !== categories.length ? "5px" : "0px",
                      marginRight:
                        index + 1 !== categories.length ? "5px" : "0px",
                    }}
                    className="CourseCardLevel"
                  >
                    {obj.name}
                  </div>
                );
              })
            : null}
        </div>
        <div className="CourseCardIndividualDetail">
          <img
            style={{ width: "100%", alignSelf: "center" }}
            height={200}
            src={courseCardImageUrl}
            alt={courseTitle}
          />
        </div>
        <div className="CourseCardDetails">
          <div className="CourseCardIndividualDetail">
            <h2>{courseTitle}</h2>
          </div>
          <div className="CourseCardIndividualDetail">
            <p>{courseDescription}</p>
          </div>
          <div className="CourseCardIndividualDetail">
            <h2 className="price">{coursePrice}£/month</h2>
          </div>
          <div className="CourseCardIndividualDetail">
            {/* <form action="/create-checkout-session" method="POST">
            <button type="submit">Checkout</button>
          </form> */}
            {localUserData?.email ? (
              <StripeCheckout
                stripeKey="pk_test_51LlrDQFPgL0mM7sR4FMxVktMujwKrgAVOqjVsYATVc6leXCDO5TqNZ2DFxtt1yZ4j1Msnk5FySzDQL5lW4rmumfS00f48davd8"
                token={makePayment}
                name={`Buy ${courseTitle}`}
                amount={parseFloat(coursePrice) * 100}
                currency="GBP"
                email={localUserData?.email ?? ""}
                // billingAddress={true}
                // zipCode={true}
                // shippingAddress
                // billingAddress
              >
                <button className="subscribeBtn">Subscribe</button>
              </StripeCheckout>
            ) : (
              <button
                href={STUDENT_PORTAL_PAGE_URL}
                onClick={(e) => {
                  window.location.replace(STUDENT_PORTAL_PAGE_URL);
                }}
                className="subscribeBtn"
              >
                Subscribe
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
