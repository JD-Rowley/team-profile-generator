const generateManagerCard = templateData => {
    return `
    <div class="card card-entirety">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${templateData.managerName}</h2>
            <h3><i class="fas fa-mug-hot"></i> Manager</h3>          
        </div>
        <div class="card-body bg-light pt-5 pb-5">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${templateData.managerId}</li>
                    <li class="list-group-item">Email: <a href=mailto:${templateData.managerEmail}>${templateData.managerEmail}</a></li>
                    <li class="list-group-item">Office Number: ${templateData.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
};

const generateEngineerCard = templateData => {
    return `
    <div class="card card-entirety">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${templateData.engineerName}</h2>
            <h3><i class="fas fa-glasses"></i> Engineer</h3>          
        </div>
        <div class="card-body bg-light pt-5 pb-5">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${templateData.engineerId}</li>
                    <li class="list-group-item">Email: <a href=mailto:${templateData.engineerEmail}>${templateData.engineerEmail}</a></li>
                    <li class="list-group-item">GitHub: ${templateData.engineerGithub}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
};

const generateInternCard = templateData => {
    return `
    <div class="card card-entirety">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${templateData.internName}</h2>
            <h3><i class="fas fa-user-graduate"></i> Intern</h3>            
        </div>
        <div class="card-body bg-light pt-5 pb-5">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${templateData.internId}</li>
                    <li class="list-group-item">Email: <a href=mailto:${templateData.internEmail}>${templateData.internEmail}</a></li>
                    <li class="list-group-item">School: ${templateData.internSchool}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

module.exports = templateData => {
    console.log(templateData);

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
    <link rel="stylesheet" href="../src/styles.css">
</head>
<body>
    <header class="d-flex justify-content-center text-white bg-danger p-5">
        <h1>My Team</h1>
    </header>
    <div class="container d-flex justify-content-around mt-5">
    ${generateManagerCard(templateData.answers)}
    ${generateEngineerCard(templateData.engineerData)}
    ${generateInternCard(templateData.internData)}
    </div>
</body>
</html>
    `;
};