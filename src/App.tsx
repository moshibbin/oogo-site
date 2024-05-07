import React, { useState, useEffect } from "react";

function App() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const getTimeRemaining = (endtime: Date) => {
      const total =
        Date.parse(endtime.toISOString()) -
        Date.parse(new Date().toISOString());
      const secs = Math.floor((total / 1000) % 60);
      const mins = Math.floor((total / 1000 / 60) % 60);
      const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return { total, days, hours: hrs, minutes: mins, seconds: secs };
    };

    const initializeClock = (id: string, endtime: Date) => {
      const updateClock = () => {
        const t = getTimeRemaining(endtime);

        setDays(t.days);
        setHours(t.hours);
        setMinutes(t.minutes);
        setSeconds(t.seconds);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      };

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    };

    const deadline = new Date(
      Date.parse(new Date().toISOString()) + 28 * 24 * 60 * 60 * 1000
    );
    initializeClock("countdown-clock", deadline);
  }, []);
  const sideimg = "./sideimg.jpg";

  return (
    <div id="body-wrap">
      <div className="row">
        <div className="col-8">
          <div className="container">
            <header id="header">
              <div className="logo">
                <img src="./logo.png" alt="logo" />
              </div>
            </header>

            <div className="main-content">
              <div className="page-title">
                <h1>We are launching soon!</h1>
                <div id="countdown-clock">
                  <div className="time">
                    <span className="days">{days}</span>
                    <small>Days</small>
                  </div>
                  <div className="time">
                    <span className="hours">{hours}</span>
                    <small>Hours</small>
                  </div>
                  <div className="time">
                    <span className="minutes">{minutes}</span>
                    <small>Minutes</small>
                  </div>
                  <div className="time">
                    <span className="seconds">{seconds}</span>
                    <small>Seconds</small>
                  </div>
                </div>
              </div>
              <form id="form">
                <p>Get notified when we launch our website</p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your email address"
                  />
                  <button type="button" className="submit-button">
                    <i className="icon icon-envelope"></i>
                    <span>NOTIFY ME</span>
                  </button>
                </div>
              </form>
            </div>
            <footer id="footer">
              <div className="social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright">
                <p>
                  Copyright &copy;{" "}
                  <a href="#" target="_blank">
                    Oogo Media
                  </a>{" "}
                  2024.{" "}
                  <a href="#" target="_blank" style={{ color: "#0043ee" }}>
                    {" "}
                    <b></b>{" "}
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </div>
        <div className="col-4">
          <img src={sideimg} alt="wallpaper" className="sideimg" />
        </div>
      </div>
    </div>
  );
}

export default App;
