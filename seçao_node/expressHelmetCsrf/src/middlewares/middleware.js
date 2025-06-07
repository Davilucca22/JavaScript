exports.CsrfError = (err, req , res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('err')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}
