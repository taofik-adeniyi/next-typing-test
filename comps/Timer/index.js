import React, { useEffect } from "react";
import Duration from "../Duration";

const Timer = (props) => {
  const {
    startCounting,
    timeElapsed,
    handleTimeElapsed,
    correctWords,
    handleDuration,
    durations,
    selectedDuration,
  } = props;
  const minutes = timeElapsed / 60;
  useEffect(() => {
    let timer;
    if (startCounting) {
      timer = setInterval(() => {
        handleTimeElapsed();
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [startCounting]);
  return (
    <div className="time-wrapper">
      <div>
        <div>Elapsed Time: {timeElapsed}</div>
        <div>Typing speed: {(correctWords / minutes || 0).toFixed(2)} WPM</div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {" "}
            <h3 style={{fontSize: '.9rem'}}>Duration in mins</h3>
            <div style={{columnGap: '.3rem', display: 'flex', marginTop: '.2rem'}}>
            {durations.map((duration,idx) => (
              <Duration key={idx} time={duration} onClick={handleDuration} />
            ))}
            </div>
          </div>

          

          <div>
            <h3 style={{fontSize: '.9rem'}}>Set Time</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                placeholder="Custom Time"
                value={selectedDuration}
                style={{ width: "2.5rem", height: '1.6rem' }}
                maxLength={2}
                onChange={(e) => handleDuration(e.target.value)}
              />
              <span style={{marginLeft: '.3rem'}}>mins</span>
            </div>
          </div>
        </div>
        {selectedDuration > 0 && <div style={{marginTop: '.5rem'}}>You have {selectedDuration} mins to finish the challenge</div>}
      </div>
    </div>
  );
};

export default Timer;
