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
*/


search.addWidget(
    instantsearch.widgets.searchBox({
        container: "#searchbox",
        placeholder: "Search By Companies"
    })
);

search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item(item) {
            return `
            <div class = "hit-title">
                <h4>
                    <h4>${item._highlightResult.Company.value}</h4>

                <p>${item.Dates}</p>
            </div>
                    
            <div class = "dates">${item.Title}</div>
            <div id = "Description">${item.Description}</div>
            <div id = "role">${item.RoleResponsibilities.map(
                result => {
                return `<span class="badge bg-secondary m-1">`+ result.trim() +'</span>'
             }).join('')
     }</div>
          
          <p>${item._highlightResult.description.value}</p>
        </article>`;
        },
      },
    })
  );







search.start();
