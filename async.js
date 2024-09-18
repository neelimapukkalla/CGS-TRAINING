window.onload = async function(){
    var result = await fetch("https://randomuser.me/api/")
    var data = await result.json()
    console.log(data)

}