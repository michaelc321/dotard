import { businessObject, NYBusiness } from "./BusinessProvider.js";
import { businessHTML } from "./Business.js";

export const businessList = () => {

  let businessHTMLRepresentations = ""
  let businessHTMLRepresentationsNY = ""
  const contentTarget = document.querySelector(".container")
  const arrayOfbusiness = businessObject()
  const arrayOfNYbusiness = NYBusiness()
 
//   for (const businessObj of arrayOfbusiness) {
//     businessHTMLRepresentations += businessHTML(businessObj)
//   }

  // for of loop
  // for (const albumObj of allRockAlbums) {
  //   rockHtmlRepresentations += albumHTMLBuilder(albumObj)
  // }

  arrayOfbusiness.forEach(businessObj => businessHTMLRepresentations += businessHTML(businessObj))
  arrayOfNYbusiness.forEach(businessObj => businessHTMLRepresentations += businessHTML(businessObj))

  contentTarget.innerHTML += `
    <article class="business__list">
    ${businessHTMLRepresentations}
    ${businessHTMLRepresentationsNY}
    </article>
    <div class="block"
  `
}