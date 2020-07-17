import { businessObject } from "./BusinessProvider.js";
import { businessHTML } from "./Business.js";

export const businessList = () => {

  let businessHTMLRepresentations = ""
  
  const contentTarget = document.querySelector(".container")
  const arrayOfbusiness = businessObject()
 
//   for (const businessObj of arrayOfbusiness) {
//     businessHTMLRepresentations += businessHTML(businessObj)
//   }

  // for of loop
  // for (const albumObj of allRockAlbums) {
  //   rockHtmlRepresentations += albumHTMLBuilder(albumObj)
  // }


  arrayOfbusiness.forEach(businessObj => businessHTMLRepresentations += businessHTML(businessObj))

  contentTarget.innerHTML += `
    <article class="business__list">
    ${businessHTMLRepresentations}
    </article>
  `





}