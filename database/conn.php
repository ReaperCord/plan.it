<?php

    $hostname = 'localhost';
    $database = 'to_do';
    $user = 'postgres';
    $password = '12345';


    
    //validação

    try {
        $pdo = new PDO("pgsql:host=$hostname; dbname=$database", $user, $password);

} catch (PDOException $e) {
        echo "Erro: ".$e -> getMessage();
    }