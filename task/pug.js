const { src, dest } = require("gulp")

// Пути конфигурации
const path = require("../config/path.js")
const app = require("../config/app.js")

// Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const pugs = require("gulp-pug")

const pug = () => {
    return src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(pugs(app.pug))
        .pipe(dest(path.pug.dest))
}

module.exports = pug