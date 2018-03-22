<?php

session_start();

if ($_SESSION['privileges'] !== 1){
    echo "Je ben een Coach!";
}
else{
    header("Location: index.html");
}


?>


<form method="POST">

    <input required="required" placeholder="Training naam" name="training_naam" type="text" class="validate"/>
    <input required="required" placeholder="Coach naam" name="training_coach_naam" type="text" class="validate"/>
    <input required="required" placeholder="Kosten" name="training_kosten" type="text" class="validate"/>
    <input required="required" placeholder="Locatie" name="training_Locatie" type="text" class="validate"/>




    <button type="submit" name="verstuur_training">Verstuur Training</button>

</form>
