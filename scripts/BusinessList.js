import { businessObject, NYBusiness, listingAgent } from "./BusinessProvider.js";
import { businessHTML } from "./Business.js";
import { businessHTMLAgent } from "./businessAgent.js";

export const businessList = () => {

  let businessHTMLRepresentations = ""
  let businessHTMLRepresentationsNY = ""
  let listingAgentHTMLRepresentation = ""
  const contentTarget = document.querySelector(".container")
  const arrayOfbusiness = businessObject()
  const arrayOfNYbusiness = NYBusiness()
  const arrayOfListingAgents = listingAgent
 
//   for (const businessObj of arrayOfbusiness) {
//     businessHTMLRepresentations += businessHTML(businessObj)
//   }

  // for of loop
  // for (const albumObj of allRockAlbums) {
  //   rockHtmlRepresentations += albumHTMLBuilder(albumObj)
  // }

  arrayOfbusiness.forEach(businessObj => businessHTMLRepresentations += businessHTML(businessObj))
  arrayOfNYbusiness.forEach(businessObj => businessHTMLRepresentationsNY += businessHTML(businessObj))
  arrayOfListingAgents.forEach(businessObj => listingAgentHTMLRepresentation += businessHTMLAgent(businessObj))
  contentTarget.innerHTML += `
    <article class="business__list">
    <h2 class="business__header">Active Businesses</h2>
    ${businessHTMLRepresentations}
    </article>
    <article class="businessList--manufacturing">
    <h2 class="business__header">New York Businesses</h2>
    ${businessHTMLRepresentationsNY}
    </article>
    <article class="agents">
    <h2 class="business__header">Purchasing Agents</h2>
    ${listingAgentHTMLRepresentation}
    </article>
  `
}