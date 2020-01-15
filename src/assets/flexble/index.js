!function (win) {
    const doc = win.document;
    const html = doc.documentElement;
    const metaEl = doc.querySelector('meta[name="viewport"]');

    let dpr = 0;
    let scale = 1;
    let rem = 0;
    let timer = null;

    if (!dpr) {//设置dpr和缩放比例
        let isIPhone = win.navigator.appVersion.match(/iPhone/gi);
        if (isIPhone) {
            let device = win.devicePixelRatio;
            if (device >= 3) {
                dpr = 3;
            } else if (device >= 2) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    html.setAttribute('dpr', dpr);
    let metaElContent = `initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`;

    if (metaEl) {
        metaEl.setAttribute('content', metaElContent);
    } else {
        metaEL = doc.createElement('meta');
        metaEL.setAttribute('name', 'viewport');
        metaEL.setAttribute('content', metaElContent);
        if (doc.firstElementChild) {//doc中有元素时
            doc.firstElementChild.appendChild(metaEL);
        } else {
            let wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    const refreshRem = () => {
        let width = html.getBoundingClientRect().width;
        if (width / dpr >= 768){//平板适配
            width = 768 * dpr;
        }
        rem = width / 3.75; //设计图宽度大小750px
        html.style.fontSize = `${rem}px`;
    }

    win.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(refreshRem ,300);
    })
    win.addEventListener('pageShow', function (e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(refreshRem ,300);
        }
        clearTimeout(timer);
    })

    if(doc.readyState === 'complete'){//设置默认字体大小
        doc.body.style.fontSize = `${ 12 * dpr }px`;
    } else {
        doc.addEventListener('DOMContentLoaded', function () {
            doc.body.style.fontSize = `${ 12 * dpr }px`;
        }, false)
    }

    refreshRem();

}(window)