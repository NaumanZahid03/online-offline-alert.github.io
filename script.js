window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus() {
    const statusElement = document.getElementById("status");
    if (navigator.onLine) {
        statusElement.innerText = "You are online";
        statusElement.classList.remove("offline");
        statusElement.classList.add("online");
    } else {
        statusElement.innerText = "You are offline";
        statusElement.classList.remove("online");
        statusElement.classList.add("offline");
    }
}

updateStatus(); // Initial status check when the page loads
