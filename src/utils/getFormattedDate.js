export function getFormattedDate() {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const date = new Date();
    const month = months[date.getMonth()];
    const day = date.getDate(); 
  
    return `${month} ${day}`;
  }
  
  