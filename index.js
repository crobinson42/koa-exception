// 异常统一处理器: 捕获业务代码抛出的异常,用户也可自己手动捕获异常,手动捕获后将不会被该处理器处理.
module.exports = function () {
    return function* (next) {
        var msg;
        var code = 403;
        try {
            yield next;
        } catch (e) {
            console.error('---> Global Exception Handler:', e.message);
            msg = e.message;
            if (e.name == "token_error") code = 302;
            if (e.name == "MongoError") msg = e.message = "Ops! The system is busy now!";
        } finally {
            if (msg) {
                this.body = { code: code, msg: msg };
            }
        }
    }
}