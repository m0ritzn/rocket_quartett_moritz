<script>
</script>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navigation Bar</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo">What's above you?</div>
            <div class="nav-links">
                <a class="nav-link" href="#visualisierung">Visualisierung</a>
                <a class="nav-link" href="#tabelle">Tabelle</a>
            </div>
        </nav>
    </header>
</body>

<style>
    :global(body) {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #1c1c2d;
        color: white;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 2em;
        background-color: #1c1c2d;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo {
        font-size: 1.5em;
        font-weight: bold;
    }

    .nav-links {
        display: flex;
    }

    .nav-link {
        margin-left: 2em;
        color: white;
        text-decoration: none;
        font-size: 1em;
        transition: color 0.3s;
    }

    .nav-link:hover {
        color: #ffcc00;
    }
</style>
