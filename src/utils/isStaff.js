export const isStaff = () => {
    const auth = localStorage.getItem("totuser")
    const userType = JSON.parse(auth)
    return userType?.is_staff
}