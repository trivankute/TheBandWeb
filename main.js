// header prevent default link event begin
var header_firstPart_subPart_link = document.querySelectorAll('.header_firstPart_subPart_member')
for(let i of header_firstPart_subPart_link )
i.onclick = function(e)
{
    e.preventDefault();
}
// header prevent default link event end
