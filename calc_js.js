function add()
{
	var a=p1.value;
	var b=p2.value;
	var c=parseFloat(a)+parseFloat(b);
	p3.value=c;
}
function minus()
{
	p3.value=p1.value-p2.value;
}
function mul()
{
	p3.value=p1.value*p2.value;
}
function div()
{
	p3.value=p1.value/p2.value;
}
function mod()
{
	p3.value=p1.value%p2.value;
}
function sinev()
{
	p3.value=Math.sin(p1.value);
}
function cosv()
{
        p3.value=Math.cos(p1.value);
}
function tanv()
{
        p3.value=Math.tan(p1.value);
}
function logv()
{       
        p3.value=Math.log(p1.value);
}
function answ()
{      
        p1.value=p3.value;
        p3.value=null;
}
