setTimeout(()=>{
  console.log("You Will Win "):
}, [1500]);

setTimeout(() => {
  console.log("Running towards winning...");
})
console.log("Before you win, you should have to start");


// A function for showing pie chart cells one by one with smooth transition:
const [visible, setVisible] = useState(0);
useEffect(() => {
  setVisibleCells(0); // Reset on data change
  if (displayData.length > 0) {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleCells(i);
      if (i >= displayData.length) clearInterval(interval);
    }, 700); 
    return () => clearInterval(interval);
  }
}, [displayData]);

// Below is the css for showing outer layer infront of the screen
basic template in react is as follows:
<div className={styles["calendar"]}>
  <div>
  </div>
  <div className={styles["active"]}>
  </div>
.calendar {
  z-index: -1;
  position: fixed;
  background: rgba(57, 122, 133, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 125ms ease-in-out;
}

.calendar > div {
  background-color: rgba(57, 122, 133, 0.5);
  transform: translateY(100%);
//  background-color: white;
  width: 100%;
  transition: transform 250ms ease-out;

  padding-inline: 20px;
  padding-top: 20px;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
}

.active {
  opacity: 1;
  z-index: 1;
  transition: opacity 125ms ease-in-out;
}

.active > div {
  transition: all 250ms ease;
  transform: translateY(0%);
}

// Material UI Libraray Examole:
<Box>
style={}
top
left
backgroundImage={}
