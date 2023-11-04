export default class ConnectionTestResource{
    async testPostCon(){
        let data = {
            "testData" : "testValue"
        }

        let resp = await fetch("/", {
            method: "POST",
            headers: {
                // "Authorization": window.localStorage.getItem("myToken"),
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })

        if (resp.status == 200){
            return await resp.json();
        } else {
            console.error("something when wrong, code: " + resp.status);
        }
    }
}