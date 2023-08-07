function ipkGenerator() {
  const ipk = [3.5, 2.9];
  const randomIPK = Math.floor(Math.random() * ipk.length);
  document.getElementById("ipk").value = ipk[randomIPK];
}

function pindahLaman() {
  window.location.href = "laman2.html";
}
function pindahIndex() {
  window.location.href = "index.html";
}
function hasil() {
  window.location.href = "laman3.html";
}

function submitData() {
  var getNama = document.getElementById("name").value;
  var getEmail = document.getElementById("email").value;
  var getHp = document.getElementById("hp").value;
  var getSemester = document.getElementById("semester").value;
  var getIpk = document.getElementById("ipk").value;
  var getBeasiswa = document.getElementById("beasiswa").value;
  var getBerkas = document.getElementById("berkas").files[0];
  var getStatus = "Belum Diverifikasi";

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    document.getElementById("name").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("hp").value != "" &&
    document.getElementById("semester").value != "" &&
    document.getElementById("ipk").value != "" &&
    document.getElementById("beasiswa").value != "" &&
    document.getElementById("berkas").value != ""
  ) {
    if (document.getElementById("email").value.match(validRegex)) {
      if (document.getElementById("ipk").value < 3) {
        alert("IPK kurang dari ketentuan");
      } else {
        if (JSON.stringify(getEmail) === localStorage.getItem("email") || JSON.stringify(getNama) === localStorage.getItem("nama")) {
          alert("Pendaftar hanya diperbolehkan daftar 1x");
          return; // Stop processing the form submission
        } else {
          data = JSON.parse(localStorage.getItem("dataHasil")) || [];
          data.push({
            dataNama: getNama,
            dataEmail: getEmail,
            dataHp: getHp,
            dataSemester: getSemester,
            dataIpk: getIpk,
            dataBeasiswa: getBeasiswa,
            dataBerkas: getBerkas.name,
            dataStatus: getStatus,
          });
          localStorage.setItem("dataHasil", JSON.stringify(data));

          window.location.href = "laman3.html";
        }

        localStorage.setItem("nama", JSON.stringify(getNama));
        localStorage.setItem("email", JSON.stringify(getEmail));
        localStorage.setItem("hp", JSON.stringify(getHp));
        localStorage.setItem("semester", JSON.stringify(getSemester));
        localStorage.setItem("ipk", JSON.stringify(getIpk));
        localStorage.setItem("beasiswa", JSON.stringify(getBeasiswa));
        localStorage.setItem("berkas", JSON.stringify(getBerkas.name));
        localStorage.setItem("status", JSON.stringify(getStatus));
      }
    } else {
      alert("Isi Email dengan benar");
    }
  } else {
    alert("Silahkan isi semua data dengan sesuai");
  }
}
