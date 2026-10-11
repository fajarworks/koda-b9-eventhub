export const timeFormatter = (time)=> {
    return new Date(time).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
}