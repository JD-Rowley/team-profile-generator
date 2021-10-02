const Employee = require("../lib/Employee");

const generateManagerCard = managerArr => {
    return managerArr.map(({ name, id, email, officeNumber }) => {
    return `
    <div class="col-3 card card-entirety m-5">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${name}</h2>
            <h3><i class="fas fa-mug-hot"></i> Manager</h3>          
        </div>
        <div class="card-body bg-light pt-5 pb-5">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>ID:</b> ${id}</li>
                    <li class="list-group-item"><b>Email:</b> <a href=mailto:${email}>${email}</a></li>
                    <li class="list-group-item"><b>Office Number:</b> ${officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    }).join('');
};

const generateEngineerCard = engineerArr => {
    return engineerArr.map(({ name, id, email, github }) => {
    return `
    <div class="col-3 card card-entirety m-5">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${name}</h2>
            <h3><i class="fas fa-glasses"></i> Engineer</h3>          
        </div>
        <div class="card-body bg-light pt-5 pb-5">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>ID:</b> ${id}</li>
                    <li class="list-group-item"><b>Email:</b> <a href=mailto:${email}>${email}</a></li>
                    <li class="list-group-item"><b>GitHub:</b> <a href="https://github.com/${github}">${github}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
    }).join('');
};

const generateInternCard = internArr => {
    return internArr.map(({ name, id, email, school }) => {
    return `
    <div class="col-3 card card-entirety m-5">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${name}</h2>
            <h3><i class="fas fa-user-graduate"></i> Intern</h3>            
        </div>
        <div class="card-body bg-light pt-5 pb-5">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>ID:</b> ${id}</li>
                    <li class="list-group-item"><b>Email:</b> <a href=mailto:${email}>${email}</a></li>
                    <li class="list-group-item"><b>School:</b> ${school}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    }).join('');
};

module.exports = templateData => {
    const { managerArr, engineerArr, internArr } = templateData;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/b70f2c5114.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <header class="d-flex justify-content-center text-white bg-danger p-5">
        <h1>My Team</h1>
    </header>
    <div class="container d-flex justify-content-around mt-5">
        <div class="row justify-content-center">
        ${generateManagerCard(managerArr)}
        ${generateEngineerCard(engineerArr)}
        ${generateInternCard(internArr)}
        </div>
    </div>
</body>
</html>
    `;
};