var count=1;
var i=0;
var j=0;

function setColor(btn, color)
{   
if(count%3==1)
	{
		var property = document.getElementById(btn);   
        property.style.backgroundColor = "orange"
		document.getElementById('t2').value = ++i;
		if(i>=16) 
		{
			property.style.backgroundColor = "orange"
			alert("TERRORIST WIN !!");
		}
		else{}
	}
	else if(count%3==2||count%3==0)
	{
		var property = document.getElementById(btn);  
        property.style.backgroundColor = "SKYBLUE"
		document.getElementById('t4').value = ++j;
	}
	else{}
		count=count+1;
}