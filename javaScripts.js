let cnt = 1;
function personInfo() {
	let fn = document.getElementById("fname").value;
	let ln = document.getElementById("lname").value;
	let ag = document.getElementById("age").value;
	let jb = document.getElementById("job").value;
	let personId = [cnt++];
	for (let num of personId) {
		let tbltr = document.createElement("tr");
		let fnCell = document.createElement("td");
		let lnCell = document.createElement("td");
		let agCell = document.createElement("td");
		let jbCell = document.createElement("td");
		let idCell = document.createElement("td");
		fnCell.innerHTML = fn;
		lnCell.innerHTML = ln;
		agCell.innerHTML = ag;
		jbCell.innerHTML = jb;
		idCell.innerHTML = num;
		tbltr.append(fnCell);
		tbltr.append(lnCell);
		tbltr.append(agCell);
		tbltr.append(jbCell);
		tbltr.append(idCell);
		document.getElementById("personTable").append(tbltr);
	}
}
function jobSearch() {
	let jbSearch = document.getElementById("searchValue").value;
	let myTable = document.getElementById("personTable");
	let myTr = myTable.getElementsByTagName("tr");
	for (let i = 0; i < myTr.length; i++) {
		let myTd = myTr[i].getElementsByTagName("td");
		for(let j=0 ; j<myTd.length ; j++) {
			let tdata = myTd[j] ;
			if (tdata) {	
				if (tdata.innerHTML.indexOf(jbSearch) > -1) {
					myTr[i].style.display = "";
					break ;
				} else {
					myTr[i].style.display = "none";
				}	
			}
		}       
	}
}
