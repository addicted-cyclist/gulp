const { src, dest } = require("gulp")

// Пути конфигурации
const path = require("../config/path.js")
const app = require("../config/app.js")

// Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const fileInclude = require("gulp-file-include")
const htmlMin = require("gulp-htmlmin")
const size = require("gulp-size")

// Обработка HTML
const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(fileInclude())
        .pipe(size({ title: "До сжатия файлов" }))
        .pipe(htmlMin(app.htmlmin))
        .pipe(size({ title: "После сжатия файлов" }))
        .pipe(dest(path.html.dest))
}

module.exports = html