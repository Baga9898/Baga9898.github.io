<?php
$login = filter_var(trim($_POST['login']),
    FILTER_SANITIZE_STRIG);
$name = filter_var(trim($_POST['name']),
    FILTER_SANITIZE_STRIG);
$password = filter_var(trim($_POST['password']),
    FILTER_SANITIZE_STRIG);

if (mb_strlen($login) < 5 || mb_strlen($login) > 90) {
    echo "Недопустимая длина логина";
    exit();
} else if (mb_strlen($name) < 3 || mb_strlen($name) > 50) {
    echo "Недопустимая длина имени";
    exit();
} else if (mb_strlen($password) < 5 || mb_strlen($password) > 90) {
    echo "Недопустимая длина пароля";
    exit();
}
    
$musql = new mysqli('porten', 'root', 'root', 'porten-bd');
$mysql->query('INSERT INTO `users` (login, password, name) VALUES($login,$password,name)');

$mysql->close();
?>
