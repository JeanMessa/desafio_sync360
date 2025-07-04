<?php
    class User extends model{

        public function create($name,$birthdate,$street,$district,$state,$biography,$img_profile){
            $sql = 'Insert into user (name,birthdate,street,district,state,biography,img_profile) values(:name,:birthdate,:street,:district,:state,:biography,:img_profile)';
            $sql = $this->db->prepare($sql);
            $sql->bindValue(":name", $name);
            $sql->bindValue(":birthdate", $birthdate);
            $sql->bindValue(":street", $street);
            $sql->bindValue(":district", $district);
            $sql->bindValue(":state", $state);
            $sql->bindValue(":biography", $biography);
            $sql->bindValue(":img_profile", $img_profile);
            $sql->execute();
            return $this->db->LastInsertId();
        }

    }
?>