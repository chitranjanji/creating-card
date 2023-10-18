var arr = [
    {name:"mayank",state:"stranger",img:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {name:"priya",state:"friend",img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name:"soniya",state:"stranger",img:"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
];
function show(){
    var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div id="card">
    <img src="${elem.img}" alt="">
    <h1>${elem.name}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rem consequuntur suscipit natus dolorem!</p>
    <h3 class="${elem.state}">${elem.state}</h3>
    <button id="${idx}">Add Friend</button>
</div>`;
})
document.querySelector("#main").innerHTML = clutter
}
show()
document.querySelector("#main").addEventListener("click",function(dets){
    if(arr[dets.target.id].state == "stranger"){
        arr[dets.target.id].state = "friend"
        show()
    }else{
        arr[dets.target.id].state = "stranger"
        show()
    }
})