import { businessObject, NYBusiness, listingAgent } from "./BusinessProvider.js";
import { businessHTML } from "./Business.js";
import { businessHTMLAgent } from "./businessAgent.js";

export const businessList = () => {

  let businessHTMLRepresentations = ""
  let businessHTMLRepresentationsNY = ""
  let listingAgentHTMLRepresentation = ""
  const contentTarget = document.querySelector(".foundCompanies")
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

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
          const getBusiness = businessObject()
          const foundBusiness = getBusiness.find(businessObj => {
            if(businessObj.companyName.includes(keyPressEvent.target.value)) {
              return businessObj
            }
          })
          

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
        // --------------------------------Search by Company Name && Search by Agent Name----------------------------------
        document
            .querySelector("#companySearch")
            .addEventListener("keypress", keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                  const getAgent = listingAgent
                  const foundAgent = getAgent.find(agentObj => {
                    if(agentObj.fullName.includes(keyPressEvent.target.value)) {
                      return agentObj
                    }
                  })
                  
        
                    companySearchResultArticle.innerHTML = `
                        <h2>
                        ${foundAgent.company}
                        </h2>
                        <h3>
                        ${foundAgent.fullName}
                        </h3>
                        <section>
                        ${foundAgent.phoneNumber}
                        </section>
                    `;
                }
            });
          
    });

   

  
    
    

    