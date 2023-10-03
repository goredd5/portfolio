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
    instantsearch.widgets.menu({
        container: "#menu",
        attribute: "RoleResponsibilities"
     })
);

search.addWidget(
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
                <p>${data.Dates}</p>


            </div>
            <div class = "dates">${data.Title}</div>

            <div>${data.Description}</div>
            <div>${data.KeyResults.Main}</div>
            <div id = "Main">${data.KeyResults.map(
                result => 
                    result.Main + '<ol id = "Subs"><li>' + result.Sub1 +'</li><li>' + result.Sub2 + '</li></ol>'
                ).join(' ')}
            </div>

            
            `
        }
    })
);



search.start();
