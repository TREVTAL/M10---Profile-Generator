export default function htmlCreator(arr) {
    let result= "";
    for (let i=0; i < arr.lenght ; i++) {
        let icon = "";
        let optional = "";

        if(arr[i].role = "manager") {
            icon='fa-mug-hot';
            optional=`Office Number: ${arr[i].office}`;
        } else if(arr[i].role="engineer") {
            icon='fa-laptop-code';
            optional=`GitHub : https://github.com/${arr[i].gitHub}/`;
        } else {
            icon='fa-graduation-cap';
            optional=`School: ${arr[i].school}`;
        };
        
        result = result.concat(
        `<div class="card shadow m-3 p-0" style="width: 21rem;">
            <div class="card-title bg-primary text-white ps-3 pb-2 rounded-top">
                <h3> ${arr[i].name} </h3>
                <h5> <i class="fa-solid ${icon}"></i> ${arr[i].role}</h5>
            </div>
            <div class="card-body">
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${arr[i].id}</li>
                        <li class="list-group-item"> Email: <a href="mailto:${arr[i].email}" target="_blank">${arr[i].email}</a></li>
                        <li class="list-group-item">${optional}</li>
                    </ul>
                </div>
            </div>
        </div>  



        `, 
        `
        
        
        `)};
    return result;
    }
