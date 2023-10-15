export const icon = (prop, bg, color) => {
  return <i className='material-symbols-outlined' style={{ background: bg, color: color}}>{prop}</i>
}

export const getTimeSince = (date) => {
  const currentDate = new Date();
  const timeElapsed = currentDate - new Date(date);
  const seconds = Math.floor(timeElapsed / 1000);
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  }
  // Get the current date's year and month
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  // Get the input date's year and month
  const inputYear = new Date(date).getFullYear();
  const inputMonth = new Date(date).getMonth();
  const yearDifference = currentYear - inputYear;
  const monthDifference = currentMonth - inputMonth;
  if (yearDifference === 0) {
    if (monthDifference === 1) {
      return '1 month ago';
    } else {
      return `${monthDifference} months ago`;
    }
  } else if (yearDifference === 1 && monthDifference < 0) {
    return '11 months ago';
  } else {
    if (yearDifference === 1) {
      return '1 year ago';
    } else {
      return `${yearDifference} years ago`;
    }
  }
}

export const getTimeLeft = (date) => {
  const currentDate = new Date();
  const timeRemaining = new Date(date) - currentDate;

  if (timeRemaining <= 0) {
    return "Time has expired";
  }

  const seconds = Math.floor(timeRemaining / 1000);
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''} left`;
  }
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} left`;
  }
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} left`;
  }
  
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days} day${days !== 1 ? 's' : ''} left`;
  }
  
  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks} week${weeks !== 1 ? 's' : ''} left`;
  }
  
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const inputYear = new Date(date).getFullYear();
  const inputMonth = new Date(date).getMonth();
  const yearDifference = inputYear - currentYear;
  const monthDifference = inputMonth - currentMonth;

  if (yearDifference === 0) {
    if (monthDifference === 1) {
      return '1 month left';
    } else {
      return `${monthDifference} months left`;
    }
  } else if (yearDifference === 1 && monthDifference < 0) {
    return '11 months left';
  } else {
    if (yearDifference === 1) {
      return '1 year left';
    } else {
      return `${yearDifference} years left`;
    }
  }
}

