<?php 
include('connection.php');
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Torque Turbo Shifter</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <!-- ====== Header ====== -->
        <header>

            <nav class="navbar">
                <div class="logo">Torque Turbo Shifter</div>
                <ul>
                    <li><a href="Home.php">Home</a></li>
                    <li><a href="Product.php">Products</a></li>
                    <li><a href="About.php">About</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </header>
        <!-- ====== Header Ends ====== -->
        <main>
            
            <section id="home">
                <h1>Welcome to Torque Turbo Shifter</h1>
                <p><h3>Enhance Your Car Performance and Style</h3></p>
            </section>
            <div class="profile">
                <button class="signin">
                    <a href="Registration.php">Sign-in</a>
                </button>
                <button class="login">
                    <a href="Login.php">Login</a>
                </button>
            </div>
        </main>
            <footer>
                <p>
                    <!-- Mahajan Pvt.Ltd  -->
                    &copy; 2023 . All rights reserved.
                </p>            
            </footer>

    </body>
</html>