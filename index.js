// 异常统一处理器: 捕获业务代码抛出的异常,用户也可自己手动捕获异常,手动捕获后将不会被该处理器处理.
module.exports = function (locale) {
    return async (ctx,next) => {
        var _locale = locale || 'EN';
        var msg;
        var code = 403;
        try {
            await next();
        } catch (e) {
            console.error('---> Global Exception Handler: \x1b[31m%s\x1b[0m => %s',e.name, e.message);
            msg = e.message;

            if (e.name == "token_error") {
                code = 302;
            } else {
                // internationalization
                switch (_locale) {
                    case 'CN':
                        msg = "操作失败,系统异常!";
                        break;
                    case 'EN':
                        msg = "Oops, system is busy now!";
                        break;
                    default:
                        msg = "Oops, system is busy now!";
                        break;
                }
            }

        } finally {
            if (msg) {
                ctx.body = { code: code, msg: msg };
            }
        }
    }
}