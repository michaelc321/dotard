export const businessHTML = (businessObj) => {
    return `
    <section class="business">
    <h2 class="business__type">${businessObj.companyName}</h2>
    <div class="adress__street">
        ${businessObj.addressFullStreet} </div>
    <div class="adress__other">
    ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}
</div>

    </section>
    <hr>
    `
}