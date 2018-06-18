const handler404 = (req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    error.code = 404
    next(error)
}

export {
    handler404
}