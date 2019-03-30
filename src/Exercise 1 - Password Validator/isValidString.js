export default function isValidString(password) {
    if (typeof password == "string") {
        if (password == "") {
            return false;
        } else if (password.includes("!")) {
            return false;
        }
        return true;
    } else if (typeof password == "number") {
        return true;
    } else {
        return false;
    }
}
