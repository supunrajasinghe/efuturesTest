const requireField = (field, fieldName) => {
    if (!field) return { status: false, error: fieldName + ' is required' }
    return true;
}

const isEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!regex.test(email)) return { status: false, error: `${email} is not a valid email` }
    return true;
}

module.exports = {
    requireField,
    isEmail
}