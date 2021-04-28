const app = document.querySelector("#app")   // 初始容器
//第一层路由
const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'
const routeTable = {    // 路由表
    '/1': div1,
    '/2': div2,
    '/3': div3,
    '/4': div4,
}

function route(container) {    // 参数代表显示页面的容器
    // let number = window.location.hash.substr(1)
    let number = window.location.pathname
    console.log(number)
    let app = document.querySelector('#app')
    if (number === '/') {   // 默认路由
        number = '/1'
    }
    // 获取界面
    let div = routeTable[number.toString()]
    // 渲染界面
    if (!div) {     //  如过输入正确的hash
        div = document.querySelector('#div404')
    }
    // 展示界面
    container.innerHTML = ''
    container.appendChild(div)
}

const allA = document.querySelectorAll('.link')  //获取页面a标签
for (let taga of allA) {
    taga.addEventListener('click', (e) => {
        e.preventDefault()
        const href = taga.getAttribute('href')
        window.history.pushState(null, 'page 2', href)
        //  通知
        onStateChange(href)
    })
}

route(app)

function onStateChange() {
    route(app)
}

