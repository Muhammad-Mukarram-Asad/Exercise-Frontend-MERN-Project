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
