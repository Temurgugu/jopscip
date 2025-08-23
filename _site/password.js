<script>
document.addEventListener("DOMContentLoaded", function() {
  var pass = prompt("Enter password to access JOPSCIP Workshop site:");
  if (pass !== "yourpassword123") {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;'>Access Denied</h2>";
  }
});
</script>