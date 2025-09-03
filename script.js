document.getElementById("forwardBtn").addEventListener("click", () => {
    history.forward();
});
document.getElementById("backBtn").addEventListener("click", () => {
    history.back()
});
document.getElementById("refreshBtn").addEventListener("click", () => {
    location.reload();
});


let output = document.getElementById("output")


document.getElementById("profileBtn").addEventListener('click', () => {
    history.pushState({ page: "profile" }, "", "profile");
    output.innerHTML = "<p>You are now on the Profile page</p>";
})




document.getElementById('settingsBtn').addEventListener('click', () => {
    history.pushState({ page: "settings" }, "", "settings");
    output.innerHTML = "<p>You are now on the Settings page</p>";
})


window.addEventListener('popstate', (e) => {
    if (e.state?.page === "profile") {
        output.innerHTML = "<p>You are now on the Profile page</p>";
    } else if (e.state?.page === "settings") {
        output.innerHTML = "<p>You are now on the Settings page</p>";
    } else {
        output.innerHTML = "<p>Welcome Home</p>";
    }
})

