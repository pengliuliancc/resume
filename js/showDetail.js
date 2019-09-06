!function () {
  let view = View('#skills')
  let controller = Controller({
    detailHeader: null,
    detailContent: null,
    details: {
      'HTML': `熟练使用HTML5 & CSS3 知识来制作精美网页，`,
      'CSS': `熟悉CSS3 动画、过渡效果、响应式等常用技术`,
      'JavaScript': `能够使用JavaScript的数据基本类型、函数与作用域等知识来实现页面的交互响应`,
      'jQuery': `熟练jQuery的js框架和库，并能够对其特性和应用有深入的了解`,
       '移动端开发': `熟练使用Bootstrap、jQuery Mobile等技术来制作开发跨平台、跨移动设备网站。 
熟悉 vw / vh 媒体查询等技术制作适配手机设备的页面。`,
  
    

    },
    bindEvents: function () {
      this.detailHeader = view.querySelector('h3')
      this.detailContent = view.querySelector('p')
      skillTags = view.querySelectorAll('li')
      for (let i = 0; i < skillTags.length; i++) {
        $(skillTags[i]).mouseenter(this.showDetail.bind(this))
      }
    },
    showDetail: function (e) {
      let name = e.currentTarget.dataset.name
      this.detailHeader.innerText = name
      this.detailContent.innerHTML = this.details[name]
    },
  })
  controller.init(view)
}.call()