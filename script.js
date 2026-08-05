const members = {
    "S001": {
        name: "ALI BHATTI",
        code: "S001",
        owner: "Chairman222",
        blood: "O+",
        photo: "S001.jpg"
    }
};

function searchMember() {
    const input = document.getElementById("memberCode");
    const code = input.value.trim().toUpperCase();
    const resultDiv = document.getElementById("result");

    if (!code) {
        resultDiv.innerHTML = `
            <p style="color:#D4AF37;font-size:18px;">
                Please enter a Member Code.
            </p>`;
        return;
    }

    const member = members[code];

    if (member) {
        resultDiv.innerHTML = `
        <div class="card">
            <div class="info-section">
                <h2>STUDENT POWER 222</h2>
                <p><b>NAME:</b> ${member.name}</p>
                <p><b>MEMBER CODE:</b> ${member.code}</p>
                <p><b>OWNER:</b> ${member.owner}</p>
                <p><b>BLOOD GROUP:</b> ${member.blood}</p>
            </div>

            <div class="photo-section">
                <img src="${member.photo}"
                     alt="${member.name}"
                     onerror="this.src='default.jpg'">
            </div>
        </div>`;
    } else {
        resultDiv.innerHTML = `
        <div class="card">
            <h2 style="color:red;">❌ MEMBER NOT FOUND</h2>
            <p style="color:white;">No record found for <b>${code}</b>.</p>
        </div>`;
    }

    input.value = "";
}

document.getElementById("memberCode").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        searchMember();
    }
});
