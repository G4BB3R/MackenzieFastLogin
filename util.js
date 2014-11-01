function save(login, pass) {
    localStorage.setItem("login", login)
    localStorage.setItem("password", pass)
}

function $$(element) {
    return document.getElementsByName(element)[0]
}

function $(element, set) {
    var item = $$(element)
    if (set != undefined)
      item.value = set
    return item.value
}

function $λ(element, event_name, callback) {
    var item = typeof element == 'object' ? element : $$(element)
    item.addEventListener(event_name, callback)
}
