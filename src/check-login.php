<?php
    $login = isset($_POST['login']) ? $_POST['login'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $device = isset($_POST['device']) ? $_POST['device'] : '';
    $ok = true;
    $messages = array();
    if ( !isset($login) || empty($login) ) {
        $ok = false;
        $messages[] = 'login cannot be empty!';
    }
    if ( !isset($password) || empty($password) ) {
        $ok = false;
        $messages[] = 'Password cannot be empty!';
    }
     if ( !isset($device) || empty($device) ) {
            $ok = false;
            $messages[] = 'Device cannot be empty!';
        }
    if ($ok) {
        $link = mysqli_connect("localhost", "h32081c_test", "test1test12", "h32081c_test");
// Check connection
        if($link === false){
            die("ERROR: Could not connect. " . mysqli_connect_error());
        }
        }
        
        // Attempt select query execution
        
        $sql = "SELECT id FROM users WHERE login = '$login' AND password = '$password' AND device = '$device'";
        if($result = mysqli_query($link, $sql)){
            if(mysqli_num_rows($result) > 0) {
		session_start();
        while($row = mysqli_fetch_array($result)){
            $id = $row['id'];
            $_SESSION['userid']=$id;
                $ok = true;
                $messages[] = 'Successful login!';
            }
            } else {
                $ok = false;
                $messages[] = 'Incorrect login/password combination!';
            }
        }

        else $ok = false;
        mysqli_close($link);

    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(
        array(
            'ok' => $ok,
            'messages' => $messages
        )
    );
?>