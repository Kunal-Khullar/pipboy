$(document).ready(function(){
    var weapons = [
        {
         "name": "44_pistol","damage": 48, "fire-rate":6,
         "range":119,"accuracy":66,"weight":4.2,"value":99
        },
        {
         "name": "10mm_pistol","damage": 18, "fire-rate":46,
         "range" :119,"accuracy":76,"weight":3.2,"value" :89
        },
        {
         "name": "Assault_Rifle","damage": 88, "fire-rate":100,
         "range":199,"accuracy":80,"weight":14.2,"value":199
        }
    ];
    $('.item-list a').on('click', function(e){
       $('.item-list a').removeClass('active')
        $(e.currentTarget).addClass('active')
      
         
    });
    $('.item-list a').on('mouseenter',function(e){
        var current_item= $(e.currentTarget).attr('class');
        console.log(current_item);
        for(item in weapons)
        {
            if(weapons[item].name==current_item)
                {
                    console.log(weapons[item]);
                    var container =$('.item-stats');
                    
                    container.find('.damage').html(weapons[item].damage);
                    container.find('.ammo').html(weapons[item].ammo);
                    container.find('.fire_rate').html(weapons[item].fire_rate);
                    container.find('.accuracy').html(weapons[item].accuracy);
                    container.find('.range').html(weapons[item].range);
                    container.find('.weight').html(weapons[item].weight);
                    container.find('.value').html(weapons[item].value);
                }
        }
    });
    
});
