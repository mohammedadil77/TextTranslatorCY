if (navigator.onLine) {
    console.log("You are online");
    document.querySelector('.NoInternet').style.display = 'none';
  } else {
    document.querySelector('.NoInternet').style.display = 'block';
  } 