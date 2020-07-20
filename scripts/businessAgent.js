export const businessHTMLAgent = (businessObj) => {
    return `
    <section class="business">
    <h2 class="business__type">${businessObj.fullName}</h2>
    <div class="adress__street">
        ${businessObj.company} </div>
    <div class="adress__other">
    ${businessObj.phoneNumber}
</div>

    </section>
    <hr>
    `
}