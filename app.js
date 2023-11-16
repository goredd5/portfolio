// initiliaze instantsearch

const searchClient = algoliasearch(
    "4I5DY17LKV",
    "4005d89f836afbc480322d89b8f61342"
);

const search = instantsearch({
    indexName: "dev_resume",
    searchClient
});

/*add widget
search.addWidget(
    instantsearch.widgets.menu({
        container: "#menu",
        attribute: "KeyResults.Skills"
     })
);



search.addWidget(
    instantsearch.widgets.searchBox({
        container: "#searchbox",
        placeholder: "Search By Companies"
    })
);


search.addWidget(
    instantsearch.widgets.menu({
        container: "#menu",
        attribute: "KeyResults.Skills"
     })
);
*/

search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item(item) {
            return `
            <div class = "hit-title">
                
            <h4>${item._highlightResult.Company.value}</h4>

            <p>${item.Dates}</p>
            </div>
                    
            <div class = "dates">${item.Title}</div>


            <div id = "role">${item._highlightResult.RoleResponsibilities
                .map(({ value }) => `<span class="badge bg-secondary m-1">${value}</span>`)
                .join('')}</div>
          
            <p>${item.Description}</p>
            ${item.KeyResults.map(
                result => {
                    if ( result.Sub1 == null  ) {
                        return `<div id = "Main">`+ result.Main +`</div>`
                    } else {
                        return `<div id = "Main">`+ result.Main + '<ol id = "Subs"><li>' + result.Sub1 +'</li><li>' + result.Sub2 + '</li><li>' + result.Sub3 + '</li></ol></div>'
                    }
            }).join('')}
        `;
        },
      },
    })
  );







search.start();
