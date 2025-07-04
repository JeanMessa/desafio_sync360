<?php

class Core{

    public function exec(){

        $router = new Router();

        $router->addRoute('/usuario',array(new UserController, 'main'));

        $route = isset($_GET['route'])?'/'.$_GET['route']:'/';

        $router->handleRequest($route);
    }
}

?>