const xhr = new XMLHttpRequest();
xhr.open("GET","./data.json");
xhr.send();
xhr.onload = () => {
    const data =JSON.parse(xhr.response);
    console.log(data);
}