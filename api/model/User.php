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
            $newUser = $this->get($this->db->LastInsertId());
            return $newUser;
        }

        public function get($id){
            $user = array();
            $sql = "SELECT * FROM user where id = :id";
            $sql = $this->db->prepare($sql);
            $sql->bindValue(":id",$id);
            $sql->execute();
            if($sql->rowCount() > 0){
                $user = $sql->fetch(\PDO::FETCH_ASSOC);
                return $user;
            }else{
                return "user not found";
            }
        }

        public function getAll(){
            $users = array();
            $sql = "SELECT * FROM user";
            $sql = $this->db->query($sql);

            if($sql->rowCount() > 0){
                $users = $sql->fetchAll(\PDO::FETCH_ASSOC);
            }
            return $users;
        }

        public function update($id,$name,$birthdate,$street,$district,$state,$biography,$img_profile){
            $sql = 'Update user set
                     name = IF(:name IS NOT NULL,:name,name),
                     birthdate = IF(:birthdate IS NOT NULL,:birthdate,birthdate),
                     street = IF(:street IS NOT NULL,:street,street),
                     district = IF(:district IS NOT NULL,:district,district),
                     state = IF(:state IS NOT NULL,:state,state),
                     biography = IF(:biography IS NOT NULL,:biography,biography),
                     img_profile = IF(:img_profile IS NOT NULL,:img_profile,img_profile)
                    WHERE id = :id';
            $sql = $this->db->prepare($sql);
            $sql->bindValue(":id", $id);
            $sql->bindValue(":name", $name);
            $sql->bindValue(":birthdate", $birthdate);
            $sql->bindValue(":street", $street);
            $sql->bindValue(":district", $district);
            $sql->bindValue(":state", $state);
            $sql->bindValue(":biography", $biography);
            $sql->bindValue(":img_profile", $img_profile);
            $sql->execute();
            $user = $this->get($id);
            return $user;
        }

        public function delete($id){
            $sql = "DELETE FROM user where id = :id";
            $sql = $this->db->prepare($sql);
            $sql->bindValue(":id",$id);
            $sql->execute();
            if($sql->rowCount() > 0){
                return array("success" => true,"message" => "delete successfully");
            }else{
                return array("success" => false,"message" => "user not found");
            } 
        }

    }
?>