function getInfo(stigma, info1, info2)
{
    $(stigma).on('mouseover', function(){
        $(info1).stop().fadeToggle(100);
        $(info2).stop().fadeToggle(100);
        
    });
    
    $(stigma).on('mouseout', function(){
        $(info1).stop().fadeToggle(10);
        $(info2).stop().fadeToggle(10);
    });
}