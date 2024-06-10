// start btn
function btn_1() {
    document.getElementById("To_calculate_DOB").style.display = "flex"
    document.getElementById("To_calculate_DOB_btn").style.display = "none"
    document.getElementById("To_calculate_age_btn").style.display = "none"
    document.getElementById("To_calculate_weight_and_height_btn").style.display = "none"
}

function btn_2() {
    // document.getElementById("To_calculate_age").style.display = "flex"
    document.getElementById("To_calculate_DOB_btn").style.display = "none"
    document.getElementById("To_calculate_age_btn").style.display = "none"
    document.getElementById("To_calculate_weight_and_height_btn").style.display = "none"
    document.getElementById("contanner").style.display = "block"
    document.getElementById("contanner").innerText = "Under Maintance"
}

function btn_3() {
    // document.getElementById("To_calculate_weight_and_height").style.display = "flex"
    document.getElementById("To_calculate_DOB_btn").style.display = "none"
    document.getElementById("To_calculate_age_btn").style.display = "none"
    document.getElementById("To_calculate_weight_and_height_btn").style.display = "none"
    document.getElementById("contanner").style.display = "block"
    document.getElementById("contanner").innerText = "Under Maintance"
}

let today = new Date()

let years = today.getFullYear()
let months = today.getMonth() + 1

const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function calc(old_year, old_month) {
    if (old_month <= 12) {
        if (old_month < months) {
            required_month = months - old_month
            required_year = years - old_year
        }
        else {
            required_month = 12 - (old_month - months)
            required_year_modify = years - 1
            required_year = required_year_modify - old_year
        }

        let for_required_month_name = required_month - 1
        let required_month_name = arr[for_required_month_name]

        DateOfBirth = `${required_month_name} ${required_year}`
    }
    else {
        DateOfBirth = "error"
    }

    return DateOfBirth
}

let date = 1 + Math.floor(Math.random() * 28)

function getvalue() {
    a = document.getElementById("year_DOB").value;
    b = document.getElementById("month_DOB").value;
    console.log(a);
    console.log(b);
    let DOB = calc(a, b);
    document.getElementById("contanner").innerText = `Date of Birth : ${date} ${DOB}`
    document.getElementById("To_calculate_DOB").style.display = "none"
    document.getElementById("contanner").style.display = "block"
}