import Paginator from "../paginator.js";

const data = [{
    "name": "Ade",
    "Job": "Student"
}, {
    "name": "Sewa",
    "Job": "Student"
}, {
    "name": "Jackson",
    "Job": "Student"
}, {
    "name": "James",
    "Job": "Student"
}, {
    "name": "Emmanuel",
    "Job": "Student"
}, {
    "name": "Klaus",
    "Job": "Student"
}]
const pager = new Paginator(2, "#result", data);
pager.nextPage()
console.log(pager.pageList)

function Render(dataList) {
    for (let i = 0; i < dataList.length; i++) {
        document.querySelector("#result").innerHTML += `It worked.  ${data[dataList[i]].name} is ${data[dataList[i]].Job} <br>`
    }
}

Render(pager.pageList);