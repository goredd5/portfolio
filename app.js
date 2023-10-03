// initiliaze instantsearch
const searchClient = algoliasearch(
    "4I5DY17LKV",
    "4005d89f836afbc480322d89b8f61342"
);

const search = instantsearch({
    indexName: "dev_resume",
    searchClient
});

//add widget
search.addWidget(
    //instantsearch.widgets.menu({
    //    container: "#test-widget",
    //    attribute: "RoleResponsibilities"
    // }),
    instantsearch.widgets.searchBox({
        container: "#searchbox",
        placeholder: "Search By Companies"
    })
);

search.addWidget(
    instantsearch.widgets.hits ({
        container: "#hits",
        templates: {
            item: data => `
            <div class = "hit-title">
                <h4>${data.Company}</h4>
            </div>
            <div class = "dates">${data.Dates}</div>

            <div>${data.Description}</div>
            
            `
        }
    })
);

search.addWidget(
    instantsearch.widgets.menu({
        container: "#test-widget",
        attribute: "RoleResponsibilities"
     })
);

search.start();
