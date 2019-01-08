function load_project(cat, proj, info) {
    // Get the main div
    let maindiv = document.getElementById(cat);
    // Create the project div
    let projectdiv = document.createElement("a");
    projectdiv.className = "proj";
    projectdiv.setAttribute("href", `./${proj}.html`)
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
    // Info container (for left and right alignment)
    let infocontainer = document.createElement("div");
    // Add a date
    let projectdate = document.createElement("span");
    projectdate.innerHTML = info.date;
    infocontainer.appendChild(projectdate);
    // Add languages
    let projectlang = document.createElement("span");
    projectlang.innerHTML = info.lang;
    infocontainer.appendChild(projectlang);

    // Add the container to the main div
    projectdiv.appendChild(infocontainer);
    // Add the project div to the main div
    maindiv.appendChild(projectdiv);
}

function load_folder(cat, folder) {
    for(let project in folder) {
        load_project(cat, project, folder[project]);
    }
}

function main() {
    for(let cat in projects) {
        load_folder(cat, projects[cat]);
    }
}

main();
