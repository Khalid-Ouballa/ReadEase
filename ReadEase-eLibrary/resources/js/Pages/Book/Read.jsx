import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "@/Pages/css/bookRead.css";
import "../../../css/fontAwesome/css/all.min.css";
import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Read({ auth, book, userProgress }) {
  const [progress, setProgress] = useState(userProgress);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.put(route("booklist.update", book.id), { progress });
  };

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const interval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1000) {
            clearInterval(interval);
            alert('Time is up!');
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
      setTimerInterval(interval);
      return () => clearInterval(interval);
    }
  }, [timeLeft, isPaused]);

  useEffect(() => {
    const timeDisplay = document.getElementById('timeDisplay');
    if (timeDisplay) {
      const minutesLeft = Math.floor(timeLeft / 1000 / 60);
      const secondsLeft = Math.floor((timeLeft / 1000) % 60);
      timeDisplay.textContent = `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
    }
  }, [timeLeft]);

  const startTimer = (minutes) => {
    setIsPaused(false);
    setTimeLeft(minutes * 60 * 1000);
  };

  const stopTimer = () => {
    setIsPaused(prev => !prev);
  };

  const resetTimer = () => {
    setIsPaused(true);
    setTimeLeft(0);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {`Book "${book.name}"`}
        </h2>
      }
    >
      <Head title={`Book "${book.name}"`} />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="container">
            <div className="linkDiv">
              <Link href={route("dashboard")}>
                <i className="fa-solid fa-arrow-left">Go Back</i>
              </Link>
            </div>
            <div className="progressSection readSession">
              <h2 className="readTitle">Tracking Your Reading Progress</h2>
              <p className="progressParagraph">
                This is your last Reading Page: <span>{userProgress}</span>
              </p>
              <form onSubmit={handleSubmit} className="progressForm">
                <label htmlFor="progress">Enter your current page:</label>
                <input
                  className="readInput"
                  type="number"
                  name="progress"
                  value={progress}
                  onChange={(e) => setProgress(e.target.value)}
                  required
                />
                <br />
                <button className="readButton" type="submit">Save Progress</button>
              </form>
            </div>
            <div className="readSession">
              <h2 className="readTitle">Personalize Your Reading Time</h2>
              <p className="readPara">Choose from the available durations:</p>
              <div className="durations">
                <button className="presetDuration" onClick={() => startTimer(10)}>
                  10 <span>min</span>
                </button>
                <button className="presetDuration" onClick={() => startTimer(20)}>
                  20 <span>min</span>
                </button>
                <button className="presetDuration" onClick={() => startTimer(30)}>
                  30 <span>min</span>
                </button>
                <button className="presetDuration" onClick={() => startTimer(60)}>
                  60 <span>min</span>
                </button>
              </div>
              <div className="preferTime">
                <input
                  type="number"
                  className="readInput prefRead"
                  id="customDuration"
                  min="1"
                  placeholder="Or enter preferred time (min):"
                />
                <button className="readButton startRead" onClick={() => {
                  const customDuration = document.getElementById('customDuration').value;
                  if (customDuration) {
                    startTimer(customDuration);
                  }
                }}>Start Reading</button>
              </div>
              <div className="timer">
                <p>
                  <span className="firstSpan">Time left:</span><span className="secondSpan" id="timeDisplay">00:00</span>
                </p>
              </div>
              <div className="timerIcons">
                <button className="icon" onClick={stopTimer}><i class="fa-sharp fa-regular fa-circle-play"></i></button>
                <button className="icon" onClick={resetTimer}><i class="fa-regular fa-circle-stop"></i></button>
              </div>
            </div>
          </div>
        </div>
        <iframe
          className="bookPdf"
          src={`../../${book.pdf_path}`}
          frameBorder="0"
        ></iframe>
      </div>
    </AuthenticatedLayout>
  );
}
