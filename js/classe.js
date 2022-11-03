class Taxi{
    constructor (password,email,transport){
        this.password=pass;
        this.email=em;
        this.transport[3]= Trans;   
    }
   // let taxi = new Taxi(em,password,transport);
}

class trajet {
constructor (destination,origin,cost){
        this.destination=destination
        this.origin=origin;
        this.cost=cost;
    }
//let transaction = new transport(destination,origin,cost)
}

class Utilisateur {
    constructor(email,password,userName)
{
    this.email= email;
    this.password= password;
    this.userName= userName;
}
} 

class chauffeur {
    constructor(NCNI,login,password,email)
{
    this.NCNI=NCNI;
    this.login=login;
    this.email= email;
    this.password= password;
}
}

class agence {
    constructor(id,Name)
{
    this.id= id;
    this.Name= Name;
}
}

class vehicule {
    constructor(Nim,marque,model,color,nbplace )
{
    this.Nim= Nim;
    this.marque= marque;
    this.model= model;
    this.color=color;
    this.nbplace=nbplace;
}
}

class voiture extends vehicule {
    constructor(Nim,marque,model,color,nbplace)
{

}
}

class client extends {
    constructor()
{
    this.email= email;
    this.password= password;
    this.appreciate=function ()
    {
        return  alert('comment avez vous trouver le service ?');
        
    }
    this.reservation= function()
    {

    }
}
}
class transport {
    constructor(idtrans,duration){
        this.idtrans= idtrans;
        this.duration= duration;
}
}
class carte {
    constructor(latitude,longitude,position)
{
    this.latitude= latitude;
    this.longitude= longitude;
    this.position= position;
}
}