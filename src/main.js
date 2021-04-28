const app = document.querySelector("#app")   // 初始容器
//第一层路由
const div1 = document.createElement('div')
div1.innerHTML = '1'
const view1 = document.createElement('div')
div1.appendChild(view1)
view1.style.height = '50px'
view1.style.background = 'red'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'
const routeTable = {    // 路由表
    '1': div1,
    '2': div2,
    '3': div3,
    '4': div4,
}
// 嵌套的路由
const div11 = document.createElement('div')
div1.innerHTML = '1.1'
const div12 = document.createElement('div')
div1.innerHTML = '1.2'
const div13 = document.createElement('div')
div1.innerHTML = '1.3'
const div14 = document.createElement('div')
div1.innerHTML = '1.4'
const route1Table = {
    '1/1':div11,
    '1/2':div12,
    '1/3':div13,
    '1/4':div14,
}

function route(container) {    // 参数代表显示页面的容器
    let number = window.location.hash.substr(1)
    let app = document.querySelector('#app')
    number = number || 1    // 默认路由
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

route(app)

//   用户改变URL中hash事件
window.addEventListener('hashchange', () => {
    route(app)
})