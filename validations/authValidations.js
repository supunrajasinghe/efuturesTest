const passwordMatch = (psw, cPsw) => {
    if (!psw || !cPsw) return { status: false, error: 'Password and confirm password both required' };
    if (psw !== cPsw) return { status: false, error: 'Password and confirm password  must be equal' };
    return true;
}

module.exports = {
    passwordMatch
}