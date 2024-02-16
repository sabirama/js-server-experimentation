const errorPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error 404</title>
    <style>
    body {
        background: #050100;
        width: 98vw;
        height: 98vh;
        display: flex;
        align-items: center;
    }
    h1 {
        color:#CC3333;
        margin: auto;
    }
    a {
        font-size: 24px;
        text-decoration: none;
        color: whitesmoke;
    }
    </style>
</head>
<body>
   <h1> Error 404. Page Not Found. <a href="/">Return</a></h1> 
</body>
</html>
`

export default errorPage;