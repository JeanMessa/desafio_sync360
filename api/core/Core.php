<?php

class Core{

    public function exec(){

        header("Access-Control-Allow-Origin: http://localhost:4200");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        header("Access-Control-Max-Age: 3600");

        $router = new Router();

        $router->addRoute('/usuario',array(new UserController, 'main'));

        $route = isset($_GET['route'])?'/'.$_GET['route']:'/';

        $router->handleRequest($route);
    }
}

?>