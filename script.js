function load_project(cat, proj, info) {
    // Get the main div
    let maindiv = document.getElementById(cat);
    // Create the project div
    let projectdiv = document.createElement("div");
    projectdiv.className = "proj";
    // Add an image
    let projectimg = document.createElement("img");
    projectimg.setAttribute("src", `${proj}.png`);
    projectimg.setAttribute("width", "300");
    projectimg.setAttribute("height", "200");
    projectdiv.appendChild(projectimg);
    // Add a title
    let projecttitle = document.createElement("h4");
    projecttitle.innerHTML = info.title;
    projectdiv.appendChild(projecttitle);
    // Add a date
    let projectdate = document.createElement("span");
    projectdate.innerHTML = info.date;
    projectdiv.appendChild(projectdate);
    // Add languages
    let projectlang = document.createElement("span");
    projectlang.innerHTML = info.lang;
    projectdiv.appendChild(projectlang);

    // Add the project div to the main div
    maindiv.appendChild(projectdiv);
}

function load_folder(cat, folder) {
    for(let project in folder) {
        load_project(cat, project, folder[project]);
    }
}

function main() {
    projects = {
        "web": {
            "wib": {
                "title": "Wikipedia Integrated Browser",
                "date": 2017,
                "lang": "HTML/CSS/JS/PHP/SQL"
            },
            "lsys": {
                "title": "L-System",
                "date": 2018,
                "lang": "HTML/CSS/JS"
            }
        },
        "soft": {
        },
        "game": {
            "juliette": {
                "title": "Juliette sors de sa chambre",
                "date": 2018,
                "lang": "Unity C#"
            },
            "neonjam": {
                "title": "NeonJam",
                "date": 2018,
                "lang": "Unity C#"
            }
        },
        "ml": {
            "reltrad": {
                "title": "Classification de traduction",
                "date": 2018,
                "lang": "Python 3 (tensorflow)"
            }
        }
    };
    for(let cat in projects) {
        load_folder(cat, projects[cat]);
    }
}

main();
