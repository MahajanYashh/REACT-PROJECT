<?Php
include('connection.php');
if(isset($_REQUEST['pay']))
{
    $q="insert into product set 
    uname='".$_REQUEST['username']."',
    card_Number='".$_REQUEST['card-number']."',
    expiry_date='".$_REQUEST['expiry']."',
    cvv='".$_REQUEST['cvv']."',
    name_on_card='".$_REQUEST['name']."'
    ";
    mysqli_query($con, $q);
}
if (isset($_REQUEST['update'])) {
    $u = "update product set
    uname='".$_REQUEST['username']."',
    card_Number='".$_REQUEST['card-number']."',
    expiry_date='".$_REQUEST['expiry']."',
    cvv='".$_REQUEST['cvv']."',
    name_on_card='".$_REQUEST['name']."'
     where ID='" . $_REQUEST['ID'] . "'";
     mysqli_query($con,$u);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Page</title>
    <link rel="stylesheet" href="css/payment.css">
</head>
<body>
<ul>
    <li><a href="profile.php">Profile</a></li>
</ul>
    <div class="product-container">
        <h1>Payment Page</h1>
        <form>
            <div class="form-group">
                <label for="username">Name</label>
                <input type="text"  name="username" placeholder="Enter User Name">
            </div>
            <div class="form-group">
                <label for="card-number">Card Number</label>
                <input type="text"  name="card-number" placeholder="Enter card number">
            </div>
            <div class="form-group">
                <label for="expiry">Expiry Date</label>
                <input type="text"  name="expiry" placeholder="MM/YY">
            </div>
            <div class="form-group">
                <label for="cvv">CVV</label>
                <input type="number" name="cvv" placeholder="Enter CVV">
            </div>
            <div class="form-group">
                <label for="name">Name on Card</label>
                <input type="text" name="name" placeholder="Enter name on card">
            </div>
            <div class="btn-container">
                
                <button  name="pay" id="pay" type="submit">Pay Now</button>
                <button name="update" id="cancel"type="submit">Update</button>
                <button  id="Home" type="submit">
                            <a href="home.php">
                        Home
                    </a> 
                    </button>
               
            </div>
            <div class="btn-container">
            </div>
        </form>
    </div>
</body>
</html>
