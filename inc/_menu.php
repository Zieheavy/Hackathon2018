<?php session_start(); ?>
<div id="mySidenav" class="sidenav">
	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
	<a href="index.html">Home</a>
	<a href="map.php">Voetbalscholen</a>
    <?php
        if (isset($_SESSION) && isset($_SESSION['naam'])){
            if (!empty($_SESSION['naam'])){
                echo '<a style="color: #F55922;">Ingelogd als: '.$_SESSION['naam'].'</a>';
                }
        }
    ?>
</div>
<span id="bars" onclick="openNav()">
	<i class="fa fa-bars" aria-hidden="true"></i>
</span>
