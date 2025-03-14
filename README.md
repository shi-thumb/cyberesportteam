<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Esports Team</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #121212;
            color: #00ffcc;
            font-family: 'Orbitron', sans-serif;
            text-align: center;
        }
        header {
            background: #1a1a1a;
            padding: 20px;
            text-transform: uppercase;
            font-size: 1.5em;
            color: #00ffcc;
            box-shadow: 0 0 10px #00ffcc;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav a {
            color: #00ffcc;
            text-decoration: none;
            font-weight: bold;
        }
        .hero {
            padding: 50px 20px;
            font-size: 1.8em;
            background: url('cyber-background.jpg') no-repeat center center/cover;
            color: #00ffcc;
            text-shadow: 0 0 10px #00ffcc;
        }
        .games-section {
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }
        .game {
            background: rgba(0, 255, 204, 0.1);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px #00ffcc;
            transition: transform 0.3s ease;
        }
        .game:hover {
            transform: scale(1.05);
        }
        .players, .products {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }
        .player, .product {
            background: rgba(0, 255, 204, 0.1);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px #00ffcc;
            transition: transform 0.3s ease;
            width: 200px;
            text-align: center;
            color: #ffffff;
        }
        .player:hover, .product:hover {
            transform: scale(1.05);
        }
        .products {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            gap: 20px;
        }
        .product img {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
            object-fit: cover;
            border-radius: 10px;
        }
        .schedule {
            padding: 20px;
            text-align: center;
        }
        .schedule table {
            width: 80%;
            margin: auto;
            border-collapse: collapse;
            background: rgba(0, 255, 204, 0.1);
            box-shadow: 0 0 10px #00ffcc;
        }
        .schedule th, .schedule td {
            padding: 10px;
            border: 1px solid #00ffcc;
        }
        .schedule th {
            background: #00ffcc;
            color: #121212;
        }
        footer {
            background: #222;
            padding: 10px;
            margin-top: 20px;
            color: #0ff;
        }
    </style>
</head>
<body>
    <header>
        <h1>Cyber Esports Team</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index-match-schedule.html">Match Schedule</a></li>
                <li><a href="index-about.html">About</a></li>
                <li><a href="index-team.html">Team</a></li>
                <li><a href="index-product.html">Merchandise</a></li>
                <li><a href="index-contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home" class="hero">
        <h2>Welcome to the Cyber Esports Team</h2>
        <p>Join us in the world of competitive gaming!</p>
    </section>
    
    <section id="about">
        <h2>About Us</h2>
        <p>Cyber Esports Team is a professional gaming organization competing in Mobile Legends tournaments worldwide.</p>
    </section>
    
    <section id="team">
        <h2>Our Team</h2>
        <div class="players">
            <div class="player"><h3>Player 1</h3><p>Role: Tank</p></div>
            <div class="player"><h3>Player 2</h3><p>Role: Support</p></div>
            <div class="player"><h3>Player 3</h3><p>Role: Marksman</p></div>
            <div class="player"><h3>Player 4</h3><p>Role: Mage</p></div>
            <div class="player"><h3>Player 5</h3><p>Role: Fighter</p></div>
            <div class="player"><h3>Player 6</h3><p>Role: Assassin</p></div>
            <div class="player"><h3>Player 7</h3><p>Role: Tank</p></div>
            <div class="player"><h3>Player 8</h3><p>Role: Support</p></div>
            <div class="player"><h3>Player 9</h3><p>Role: Marksman</p></div>
            <div class="player"><h3>Player 10</h3><p>Role: Mage</p></div>
        </div>
    </section>

    <section id="schedule" class="schedule">
        <h2>Match Schedule</h2>
        <table>
            <tr>
                <th>Date</th>
                <th>Opponent</th>
                <th>Time</th>
            </tr>
            <tr>
                <td>March 20, 2025</td>
                <td>Team A</td>
                <td>18:00</td>
            </tr>
            <tr>
                <td>March 25, 2025</td>
                <td>Team B</td>
                <td>20:00</td>
            </tr>
            <tr>
                <td>March 30, 2025</td>
                <td>Team C</td>
                <td>19:00</td>
            </tr>
        </table>
    </section>
    
    <section id="products">
        <h2>Merchandise</h2>
        <div class="products">
            <div class="product"><img src="desain-jersey-gaming.webp" alt="Jersey"><h3>Cyber Team Jersey</h3><p>Official team jersey for fans.</p></div>
            <div class="product"><img src="mouse.jpg" alt="Mousepad"><h3>Gaming Mousepad</h3><p>High-quality mousepad with Cyber Esports logo.</p></div>
            <div class="product"><img src="hodie.jpg" alt="Hoodie"><h3>Team Hoodie</h3><p>Stay warm with our Cyber Esports hoodie.</p></div>
            <div class="product"><img src="keychain.jpg" alt="Keychain"><h3>Keychain</h3><p>Stylish keychain for true fans.</p></div>
        </div>
    </section>
    
    <footer>
        <p>&copy; 2025 Cyber Esports Team. All Rights Reserved.</p>
    </footer>
    <script src="java.js"></script>
</body>
</html>
