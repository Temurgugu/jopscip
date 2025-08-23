<script>
document.addEventListener("DOMContentLoaded", function() {
  // check if already unlocked in this browser session
  if (sessionStorage.getItem("jopscipAuth") === "true") {
    return;
  }

  // create overlay
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";

  // create password box
  var box = document.createElement("div");
  box.style.background = "#fff";
  box.style.padding = "30px";
  box.style.borderRadius = "10px";
  box.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  box.style.textAlign = "center";
  box.style.maxWidth = "300px";
  box.style.width = "80%";

  var title = document.createElement("h2");
  title.innerText = "🔑 Enter Password";
  title.style.marginBottom = "15px";

  var input = document.createElement("input");
  input.type = "password";
  input.placeholder = "Password";
  input.style.padding = "10px";
  input.style.width = "100%";
  input.style.marginBottom = "15px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "6px";

  var btn = document.createElement("button");
  btn.innerText = "Unlock";
  btn.style.padding = "10px 20px";
  btn.style.background = "#4a90e2";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "6px";
  btn.style.cursor = "pointer";

  var error = document.createElement("div");
  error.style.color = "red";
  error.style.marginTop = "10px";

  // check password
  btn.addEventListener("click", function() {
    if (input.value === "scien") {
      sessionStorage.setItem("jopscipAuth", "true");
      document.body.removeChild(overlay);
    } else {
      error.innerText = "❌ Incorrect password";
    }
  });

  // allow pressing Enter
  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      btn.click();
    }
  });

  // assemble
  box.appendChild(title);
  box.appendChild(input);
  box.appendChild(btn);
  box.appendChild(error);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
});
</script>
