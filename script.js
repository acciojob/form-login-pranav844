function getFormvalue() {
    let input =document.querySelectorAll("input")
	let first  = input[0].value
	let second = input[1].value
	let fullName = first+" "+second
	alert(fullName)

}
