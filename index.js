module.exports = function(args){
    return Array.prototype.slice.call(args, args.callee.length);
};