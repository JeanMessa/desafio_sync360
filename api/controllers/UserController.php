<?php
    class UserController{
        
        public function main(){
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                $this->create();
            }else if($_SERVER['REQUEST_METHOD'] == "GET"){
                if(isset($_GET['id'])){
                    $this->get();
                }else{
                    $this->getAll();
                }
            }
        }

        private function create(){
            if(isset($_POST['name'],$_POST['birthdate'],$_POST['street'],$_POST['district'],$_POST['state'],$_POST['biography'])){
                $user = new User();

                $img_name = "default.png";

                if(isset($_FILES['img_profile']['name']) && !empty($_FILES['img_profile']['name'])){
                    $extension = pathinfo($_FILES['img_profile']['tmp_name'],PATHINFO_EXTENSION);
                    $file  = md5(date('Ymdhis').rand(111,999)).'.'.$extension;		
                    copy($_FILES['img_profile']['tmp_name'],'../profile_media/'.$file);
                    $img_name = $file;
                }
                echo json_encode ($user->create($_POST['name'],$_POST['birthdate'],$_POST['street'],$_POST['district'],$_POST['state'],$_POST['biography'],$img_name));
            }
               
        }

        private function get(){
            $id = $_GET['id'];
            $user = new User();
            echo json_encode( $user->get($id));
        }

        private function getAll(){
            $user = new User();
            echo json_encode( $user->getAll());
        }
    }
?>