var family ={
    'address' : 'seoul',
    members: {},
    addFamily : function (age, name, role){
        this.members[role] = {
          age : age,
          name : name
        };
    },

    getHeadCount :  function (){
        return Object.keys(this.members).length;
    }
};

family.addFamily(30,'chloe', 'aunt');
family.addFamily(3,'lyn', 'niece');
family.addFamily(10,'dangdangi', 'dog');
console.log(family.getHeadCount());